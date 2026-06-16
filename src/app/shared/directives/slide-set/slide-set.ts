import {
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  Directive,
  WritableSignal,
  Type,
  effect,
  Injector,
  ChangeDetectorRef,
} from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AttachComponentService } from '@shared/services/attach-component.service';
import { TranslatedSlide } from '@shared/models/translation.model';

@Directive()
export class SlideSet implements AfterViewInit, OnDestroy {
  setName = '';
  attachComponentService = inject(AttachComponentService);
  translateService = inject(TranslateService);
  changeDetector = inject(ChangeDetectorRef);
  components: Type<unknown>[] = [];
  slidesContent = signal<TranslatedSlide[]>([]);
  destroyed = signal<boolean>(false);
  baseTranslation: WritableSignal<TranslatedSlide[]> = signal<TranslatedSlide[]>([]);
  translationsSubscription = Subscription.EMPTY;
  languageChangeSubscription = Subscription.EMPTY;
  previousTranslationData: LangChangeEvent = { lang: '', translations: {} };
  private injector = inject(Injector);

  ngAfterViewInit(): void {
    this.translationsSubscription = this.translateService
      .stream(this.setName)
      .subscribe((newTranslationObject: Record<number, TranslatedSlide>) => {
        const newTranslation = Object.values(newTranslationObject);

        if (Array.isArray(newTranslation)) {
          this.slidesContent.set(newTranslation);
        }

        if (this.components?.length) {
          effect(
            () => {
              this.attachComponents();
            },
            { injector: this.injector },
          );
          this.changeDetector.detectChanges();
        }
      });
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
