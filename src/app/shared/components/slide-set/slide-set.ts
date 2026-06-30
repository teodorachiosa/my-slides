import {
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  WritableSignal,
  Type,
  Component,
  afterRenderEffect,
} from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AttachComponentService } from '@shared/services/attach-component.service';
import { TranslatedSlide } from '@shared/models/translation.model';

@Component({
  selector: 'app-slide-set',
  template: ``,
})
export class SlideSet implements AfterViewInit, OnDestroy {
  setName = '';
  attachComponentService = inject(AttachComponentService);
  translateService = inject(TranslateService);
  components: Type<unknown>[] = [];
  slidesContent = signal<TranslatedSlide[]>([]);
  destroyed = signal<boolean>(false);
  translationsSubscription = Subscription.EMPTY;

  constructor() {
    afterRenderEffect({
      read: () => {
        if (this.components?.length && this.slidesContent()) {
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

  attachComponents(): void {
    this.components.forEach((component) => {
      if (!this.destroyed()) {
        this.attachComponentService.attachComponent(component);
      }
    });
  }
}
