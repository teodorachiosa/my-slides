import {
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
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslatedSlide } from 'app/shared/models/translation.model';
import { CurrentRouteService } from 'app/shared/services/current-route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-of-contents',
  imports: [RouterLink],
  templateUrl: './table-of-contents.html',
  styleUrl: './table-of-contents.scss',
})
export class TableOfContents implements OnInit, AfterViewInit, OnDestroy {
  @Input() contents = signal<TranslatedSlide[]>([]);
  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  translateService = inject(TranslateService);
  currentRouteService = inject(CurrentRouteService);
  allHeadings: WritableSignal<HTMLHeadingElement[]> = signal([]);
  languageChangeSubscription: Subscription = Subscription.EMPTY;
  currentRoute = '';

  ngOnInit(): void {
    this.currentRoute = this.currentRouteService.getCurrentRoute();
    this.watchForPositionChanges();
  }

  ngAfterViewInit(): void {
    this.getHeadings();

    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      this.getHeadings();
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }

  watchForPositionChanges(): void {
    const headerElement = this.document.querySelector('header');
    const tocElement = this.document.querySelector('app-table-of-contents');

    if (typeof window !== 'undefined') {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const headerHeight = `${entry.borderBoxSize[0].blockSize}px`;
          this.renderer.setStyle(tocElement, 'top', headerHeight);
          this.renderer.setStyle(tocElement, 'height', `calc(100vh - ${headerHeight})`);
        }
      });

      if (headerElement) {
        resizeObserver.observe(headerElement);
      }
    }
  }

  getHeadings(): void {
    setTimeout(() => {
      const allHeadingsQuery: NodeListOf<HTMLHeadingElement> =
        this.document.querySelectorAll('h1,h2,h3,h4,h4,h6');
      this.allHeadings.set(Array.from(allHeadingsQuery));
    });
  }
}
