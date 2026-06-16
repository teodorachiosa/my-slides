import {
  inject,
  signal,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Directive,
  WritableSignal,
  Type,
} from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AttachComponentService } from '@shared/services/attach-component.service';
import { TranslatedSlide } from '@shared/models/translation.model';

const SHAMEFUL_TIMEOUT = 250;

@Directive()
export class SlideSet implements OnInit, AfterViewInit, OnDestroy {
  setName = '';
  attachComponentService = inject(AttachComponentService);
  translateService = inject(TranslateService);
  components: Type<unknown>[] = [];
  slidesContent = signal<TranslatedSlide[]>([]);
  destroyed = signal<boolean>(false);
  baseTranslation: WritableSignal<TranslatedSlide[]> = signal<TranslatedSlide[]>([]);
  translationsSubscription = Subscription.EMPTY;
  languageChangeSubscription = Subscription.EMPTY;
  previousTranslationData: LangChangeEvent = { lang: '', translations: {} };

  ngOnInit(): void {
    this.translationsSubscription = this.translateService
      .stream(this.setName)
      .subscribe((newTranslationObject: Record<number, TranslatedSlide>) => {
        const newTranslation = Object.values(newTranslationObject);

        if (Array.isArray(newTranslation)) {
          this.slidesContent.set(newTranslation);
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.components?.length) {
      setTimeout(() => {
        this.attachComponents();
      }, SHAMEFUL_TIMEOUT);

      this.languageChangeSubscription = this.translateService.onLangChange.subscribe(
        (translationData: LangChangeEvent) => {
          if (JSON.stringify(translationData) === JSON.stringify(this.previousTranslationData)) {
            return;
          }

          this.previousTranslationData = translationData;
          setTimeout(() => {
            this.attachComponents();
          }, SHAMEFUL_TIMEOUT);
        },
      );
    }
  }

  ngOnDestroy(): void {
    this.translationsSubscription.unsubscribe();
    this.languageChangeSubscription.unsubscribe();
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
