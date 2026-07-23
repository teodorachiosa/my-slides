import {
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  Type,
  Component,
  afterRenderEffect,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AttachComponentService } from '@shared/services/attach-component.service';
import { TranslatedSlide } from '@shared/models/translation.model';
import { CurrentRouteService } from '@shared/services/current-route.service';

@Component({
  selector: 'app-presentation',
  template: ``,
})
export class Presentation implements AfterViewInit, OnDestroy {
  setName = '';
  attachComponentService = inject(AttachComponentService);
  translateService = inject(TranslateService);
  components: Type<unknown>[] = [];
  slidesContent = signal<TranslatedSlide[]>([]);
  destroyed = signal<boolean>(false);
  translationsSubscription = Subscription.EMPTY;
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  currentRouteService = inject(CurrentRouteService);

  constructor() {
    afterRenderEffect({
      write: () => {
        if (this.components?.length && this.slidesContent()) {
          this.updateSamePageLinks();
          this.attachComponents();
        }
      },
    });
  }

  ngAfterViewInit(): void {
    this.translationsSubscription = this.translateService
      .stream(this.setName)
      .subscribe((newTranslationObject: Record<number, TranslatedSlide>) => {
        const newTranslation = Object.values(newTranslationObject);

        if (Array.isArray(newTranslation)) {
          this.slidesContent.set(newTranslation);
        }
      });
  }

  ngOnDestroy(): void {
    this.translationsSubscription.unsubscribe();
    this.destroyed.set(true);
  }

  updateSamePageLinks(): void {
    const allLinks: HTMLLinkElement[] = Array.from(
      this.elementRef.nativeElement.querySelectorAll('app-slides-container [href]'),
    );

    const samePageLinks = allLinks.filter((link: HTMLLinkElement) =>
      link.getAttribute('href')?.startsWith('#'),
    );

    samePageLinks.forEach((link) => {
      this.renderer.setAttribute(
        link,
        'href',
        `${this.currentRouteService.getCurrentRoute()}${link.getAttribute('href')}`,
      );
    });
  }

  attachComponents(): void {
    this.components.forEach((component) => {
      if (!this.destroyed()) {
        this.attachComponentService.attachComponent(component);
      }
    });
  }
}
