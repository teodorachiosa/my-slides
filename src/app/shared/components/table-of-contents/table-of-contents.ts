import {
  afterRenderEffect,
  AfterViewInit,
  Component,
  DOCUMENT,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { State } from 'app/shared/models/state.model';
import { TranslatedSlide } from 'app/shared/models/translation.model';
import { CurrentRouteService } from 'app/shared/services/current-route.service';
import { StateService } from 'app/shared/services/state.service';
import { Subscription } from 'rxjs';

const SCROLL_MARGIN_OFFSET = 100;

@Component({
  selector: 'app-table-of-contents',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './table-of-contents.html',
  styleUrl: './table-of-contents.scss',
})
export class TableOfContents implements OnInit, AfterViewInit, OnDestroy {
  @Input() contents = signal<TranslatedSlide[]>([]);
  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  stateService = inject(StateService);
  translateService = inject(TranslateService);
  currentRouteService = inject(CurrentRouteService);
  router = inject(Router);
  allHeadings: WritableSignal<HTMLHeadingElement[]> = signal([]);
  languageChangeSubscription: Subscription = Subscription.EMPTY;
  routerEventsSubscription: Subscription = Subscription.EMPTY;
  currentRoute = '';
  state: WritableSignal<State> = signal({});

  constructor() {
    afterRenderEffect({
      read: () => {
        this.getUpdatedHeadings();

        if (this.allHeadings()) {
          const activeHeadingId = this.state().activeHeading?.id;
          const hrefSelector = `.toc-link[href*="${activeHeadingId}"]`;
          const activeTOCLink = this.document.querySelector<HTMLElement>(hrefSelector);
          const scrollContainer = this.document.querySelector<HTMLElement>('app-table-of-contents');

          if (typeof window !== 'undefined') {
            const smallerWidthMedia = window.matchMedia('(width <= 500px)');

            if (!smallerWidthMedia.matches && activeTOCLink) {
              scrollContainer!.scrollTop = activeTOCLink.offsetTop - SCROLL_MARGIN_OFFSET;
            }
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.currentRoute = this.currentRouteService.getCurrentRoute();
    this.watchForPositionChanges();
    this.state = this.stateService.getState();
  }

  ngAfterViewInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd) {
        this.getUpdatedHeadings();

        this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
          this.getUpdatedHeadings();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
    this.languageChangeSubscription.unsubscribe();
  }

  watchForPositionChanges(): void {
    const headerElement = this.document.querySelector('header');
    const tocElement = this.document.querySelector('app-table-of-contents');

    if (typeof window !== 'undefined') {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const headerHeight = `${entry.borderBoxSize[0].blockSize}px`;
          const smallerHeightMedia = window.matchMedia('(height <= 500px)');

          if (smallerHeightMedia.matches) {
            this.renderer.setStyle(tocElement, 'top', 0);
            this.renderer.setStyle(tocElement, 'height', `100vh`);
          } else {
            this.renderer.setStyle(tocElement, 'top', headerHeight);
            this.renderer.setStyle(tocElement, 'height', `calc(100vh - ${headerHeight})`);
          }
        }
      });

      if (headerElement) {
        resizeObserver.observe(headerElement);
      }
    }
  }

  getUpdatedHeadings(): void {
    const allHeadingsQuery: NodeListOf<HTMLHeadingElement> =
      this.document.querySelectorAll('h1,h2,h3,h4,h4,h6');

    let allHeadingsArray = Array.from(allHeadingsQuery);
    allHeadingsArray = allHeadingsArray.filter(
      (heading) => !heading.classList.contains('no-slides'),
    );

    this.allHeadings.set(allHeadingsArray);
  }
}
