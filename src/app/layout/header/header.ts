import { AfterViewInit, Component, DOCUMENT, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';

import { State, Theme, Layout } from '@shared/models/state.model';
import { ContentLanguage } from '@shared/models/content-language.model';
import { StateService } from '@shared/services/state.service';
import { FolderOpenIcon } from '@shared/components/icons/folder-open-icon/folder-open-icon';
import { SettingsIcon } from '@shared/components/icons/settings-icon/settings-icon';
import { PresentationIcon } from '@shared/components/icons/presentation-icon/presentation-icon';
import { PlusIcon } from '@shared/components/icons/plus-icon/plus-icon';
import { MinusIcon } from '@shared/components/icons/minus-icon/minus-icon';
import { FileIcon } from '@shared/components/icons/file-icon/file-icon';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { NotificationService } from '@shared/services/notification.service';
import { routes } from 'app/app.routes';

const WIDTH_STEP = 10;
const WIDTH_MIN = 10;
const WIDTH_MAX = 100;

@Component({
  selector: 'app-header, [header]',
  imports: [
    FormsModule,
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    FolderOpenIcon,
    SettingsIcon,
    PresentationIcon,
    PlusIcon,
    MinusIcon,
    FileIcon,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit {
  stateService = inject(StateService);
  document = inject(DOCUMENT);
  translateService = inject(TranslateService);
  notificationService = inject(NotificationService);
  localStorageService = inject(LocalStorageService);
  state: State = {};
  layout?: Layout;
  width?: number;
  theme: Theme = 'system';
  language: ContentLanguage = 'en';
  routes: Routes;

  @HostListener('document:keydown', ['$event'])
  handlePresentKeys(event: KeyboardEvent) {
    if (
      this.stateService.getState()().layout === 'fixed' &&
      ((event.shiftKey && event.key === 'F5') || (event.metaKey && event.key === 'Enter'))
    ) {
      event.preventDefault();
      this.present();
    }
  }

  constructor() {
    this.routes = routes;
  }

  ngOnInit(): void {
    this.setInitialLayout();
    this.setInitialWidth();
    this.setInitialTheme();
    this.setInitialLanguage();
  }

  ngAfterViewInit(): void {
    if (typeof this.document !== 'undefined') {
      fromEvent(this.document, 'fullscreenchange').subscribe(() => {
        if (this.document.fullscreenElement === null) {
          this.exitFullscreen();
        }
      });
    }
  }

  exitFullscreen(): void {
    this.document.documentElement.classList.remove('fullscreen');
    this.updateFullscreenStateAndUI(false);
    this.focusCurrentSlide();
    this.notificationService.notify(this.translateService.instant('ui.exitFullscreen'));
  }

  setInitialLayout(): void {
    const initialLayoutLocalStorage = this.localStorageService.getLocalStorage()?.layout;

    if (initialLayoutLocalStorage) {
      this.layout = initialLayoutLocalStorage;
    } else {
      this.layout = this.stateService.getState()().layout;
    }
    this.updateLayout(true);
  }

  setInitialWidth(): void {
    const initialWidthLocalStorage = this.localStorageService.getLocalStorage()?.width;

    if (initialWidthLocalStorage) {
      this.width = initialWidthLocalStorage;
    } else {
      this.width = this.stateService.getState()().width;
    }
    this.updateWidth(true);
  }

  setInitialTheme(): void {
    const initialThemeLocalStorage = this.localStorageService.getLocalStorage()?.theme;

    if (typeof initialThemeLocalStorage !== 'undefined') {
      this.theme = initialThemeLocalStorage;
      this.updateDarkMode(true);
    } else {
      const initialThemeState = this.stateService.getState()().theme;
      if (initialThemeState) {
        this.theme = initialThemeState;
        this.updateDarkMode(true);
      }
    }
  }

  setInitialLanguage(): void {
    const initialLanguageLocalStorage = this.localStorageService.getLocalStorage()?.language;
    if (initialLanguageLocalStorage) {
      this.language = initialLanguageLocalStorage as ContentLanguage;
      this.updateLanguage(this.language, true);
    } else {
      this.language = this.stateService.getState()().language as ContentLanguage;
    }
  }

  updateLayout(noLocalStorageChanges = false): void {
    this.state.layout = this.layout;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ layout: this.layout });
    }

    this.document.documentElement.classList.remove(
      this.layout === 'fixed' ? 'flexible-layout' : 'fixed-layout',
    );
    this.document.documentElement.classList.add(
      this.layout === 'fixed' ? 'fixed-layout' : 'flexible-layout',
    );
  }

  updateWidth(noLocalStorageChanges = false): void {
    this.state.width = this.width;
    this.stateService.setState(this.state);

    this.focusCurrentSlide(false, true);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ width: this.width });
    }
  }

  updateTheme(theme: Theme): void {
    this.theme = theme;
    this.updateDarkMode();
  }

  updateDarkMode(noLocalStorageChanges = false): void {
    this.state.theme = this.theme;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ theme: this.theme });
    }

    if (typeof this.theme !== 'undefined') {
      this.setColorScheme();
    }
  }

  setColorScheme(): void {
    if (typeof this.document !== 'undefined') {
      this.document.documentElement.style.setProperty(
        'color-scheme',
        ['light', 'dark'].includes(this.theme) ? (this.theme as string) : 'light dark',
      );
    }
  }

  isDecreaseButtonDisabled(): boolean {
    return !this.width || this.width < WIDTH_MIN + WIDTH_STEP;
  }

  isIncreaseButtonDisabled(): boolean {
    return !this.width || this.width > WIDTH_MAX - WIDTH_STEP;
  }

  decreaseWidth(): void {
    if (!this.width || this.isDecreaseButtonDisabled()) return;
    this.width = this.width - WIDTH_STEP;
    this.updateWidth();
  }

  increaseWidth(): void {
    if (!this.width || this.isIncreaseButtonDisabled()) return;
    this.width = this.width + WIDTH_STEP;
    this.updateWidth();
  }

  async present(): Promise<void> {
    if (!this.document.fullscreenElement) {
      await this.document.documentElement.requestFullscreen().then(() => {
        this.document.documentElement.classList.add('fullscreen');
        this.updateFullscreenStateAndUI(true);
        this.focusCurrentSlide(true);
        this.notificationService.notify(this.translateService.instant('ui.requestFullscreen'));
      });
    }
  }

  updateFullscreenStateAndUI(isFullscreen: boolean): void {
    this.state.isFullscreen = isFullscreen;
    this.stateService.setState(this.state);
  }

  updateLanguage(language: ContentLanguage, noLocalStorageChanges = false): void {
    this.translateService.use(language);
    this.document.documentElement.setAttribute('lang', language);

    this.state.language = language;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ language: language });
    }
  }

  closeMenuPopover(): void {
    const menuPopover = this.document.getElementById('main-menu');
    menuPopover?.hidePopover();
  }

  focusCurrentSlide(isRequestingFullscreen = false, isScrollOnly = false): void {
    const activeElement = this.stateService.getState()().activeElement;
    let currentSlideElement;

    if (activeElement) {
      currentSlideElement = activeElement?.closest('app-slide');
    } else {
      const currentSlide = this.stateService.getState()().currentSlide ?? 0;
      currentSlideElement = this.document.querySelectorAll<HTMLElement>('app-slide')[currentSlide];
    }

    if (currentSlideElement) {
      requestAnimationFrame(() => {
        if (!isScrollOnly) {
          if (activeElement) {
            (activeElement as HTMLElement)?.focus();
          } else {
            currentSlideElement?.setAttribute('tabindex', '0');
            (currentSlideElement as HTMLElement)?.focus();
          }
        }

        currentSlideElement.scrollIntoView({
          behavior: 'instant',
          block: 'center',
        });

        if (!isRequestingFullscreen && !isScrollOnly) {
          currentSlideElement.removeAttribute('tabindex');
        }
      });
    }
  }
}
