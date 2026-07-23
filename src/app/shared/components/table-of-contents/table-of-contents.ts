import {
  afterRenderEffect,
  AfterViewInit,
  Component,
  DOCUMENT,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { State } from '@shared/models/state.model';
import { TranslatedSlide } from '@shared/models/translation.model';
import { CurrentRouteService } from '@shared/services/current-route.service';
import { StateService } from '@shared/services/state.service';
import { PanelLeftCloseIcon } from '@shared/components/icons/panel-left-close-icon/panel-left-close-icon';
import { PanelLeftOpenIcon } from '@shared/components/icons/panel-left-open-icon/panel-left-open-icon';

const SCROLL_MARGIN_OFFSET = 100;
/* _mixins.scss should also be updated */
const SMALL_WIDTH = 570;
/* _mixins.scss should also be updated */
const SMALL_HEIGHT = 500;

@Component({
  selector: 'app-table-of-contents',
  imports: [RouterLink, TranslatePipe, PanelLeftCloseIcon, PanelLeftOpenIcon],
  templateUrl: './table-of-contents.html',
  styleUrl: './table-of-contents.scss',
})
export class TableOfContents implements OnInit, AfterViewInit, OnDestroy {
  @Input() contents = signal<TranslatedSlide[]>([]);
  document = inject(DOCUMENT);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  stateService = inject(StateService);
  translateService = inject(TranslateService);
  currentRouteService = inject(CurrentRouteService);
  allHeadings: WritableSignal<HTMLHeadingElement[]> = signal([]);
  languageChangeSubscription: Subscription = Subscription.EMPTY;
  currentRoute = '';
  state: WritableSignal<State> = signal({});
  isClosed = false;

  @HostBinding('class.closed')
  get hasClosedClass() {
    return this.isClosed;
  }

  constructor() {
    afterRenderEffect({
      read: () => {
        this.currentRoute = this.currentRouteService.getCurrentRoute();
        this.getUpdatedHeadings();

        if (this.allHeadings() && this.elementRef.nativeElement) {
          const activeHeadingId = this.state().activeHeading?.id;
          const hrefSelector = `.toc-link[href*="${activeHeadingId}"]`;
          const activeTOCLink: HTMLElement =
            this.elementRef.nativeElement.querySelector(hrefSelector);
          const scrollContainer: HTMLElement =
            this.elementRef.nativeElement.querySelector('.toc-container');

          if (typeof window !== 'undefined') {
            const smallerWidthMedia = window.matchMedia(`(width <= ${SMALL_WIDTH}px)`);

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
    this.getUpdatedHeadings();

    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      this.currentRoute = this.currentRouteService.getCurrentRoute();
      this.getUpdatedHeadings();
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  watchForPositionChanges(): void {
    const headerElement = this.document.querySelector('header');
    const tocElement = this.elementRef.nativeElement;

    if (typeof window !== 'undefined') {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const headerHeight = `${entry.borderBoxSize[0].blockSize}px`;
          const smallerHeightMedia = window.matchMedia(`(height <= ${SMALL_HEIGHT}px)`);

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
    const allHeadingsQuery: NodeListOf<HTMLHeadingElement> = this.document.querySelectorAll(
      '#slides :is(h1, h2, h3, h4, h5, h6)',
    );

    let allHeadingsArray = Array.from(allHeadingsQuery);
    allHeadingsArray = allHeadingsArray.filter(
      (heading) => !heading.classList.contains('no-slides'),
    );

    this.allHeadings.set(allHeadingsArray);
  }

  toggleTOCVisibility(): void {
    this.isClosed = !this.isClosed;
    if (this.isClosed === false) {
      requestAnimationFrame(() => {
        this.elementRef.nativeElement.querySelector('#toc-nav a').focus();
      });
    }
  }
}
