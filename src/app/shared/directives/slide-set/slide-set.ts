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

const SHAMEFUL_TIMEOUT = 300;

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
    const baseTranslationRaw = this.translateService.instant(this.setName);
    if (typeof baseTranslationRaw === 'string' && baseTranslationRaw === this.setName) {
      return;
    }

    this.baseTranslation.set(baseTranslationRaw);
    this.translationsSubscription = this.translateService
      .stream(this.setName)
      .subscribe((newTranslationObject: Record<number, TranslatedSlide>) => {
        const newTranslation = Object.values(newTranslationObject);

        if (Array.isArray(newTranslation)) {
          const mergedContent = this.mergeTranslations(this.baseTranslation(), newTranslation);
          this.slidesContent.set(mergedContent);
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

  mergeTranslations(
    baseTranslation: TranslatedSlide[],
    newTranslation: TranslatedSlide[],
  ): TranslatedSlide[] {
    let lastColorVariableUsed: string | undefined;

    return newTranslation.map((newTranslationItem, index) => {
      const baseColor = baseTranslation[index]?.backgroundColor;
      const newColor = newTranslationItem.backgroundColor ?? baseColor ?? lastColorVariableUsed;

      if (newColor) {
        lastColorVariableUsed = newColor;
      }

      return {
        backgroundColor: newColor ?? '',
        content: newTranslationItem.content,
      };
    });
  }
}
