import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { State, Theme, Layout } from '@shared/models/state.model';
import { ContentLanguage } from '@shared/models/content-language.model';
import { StateService } from '@shared/services/state.service';
import { MenuIcon } from '@shared/components/icons/menu-icon/menu-icon';
import { SettingsIcon } from '@shared/components/icons/settings-icon/settings-icon';
import { PresentationIcon } from '@shared/components/icons/presentation-icon/presentation-icon';
import { routes } from 'app/app.routes';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { Logo } from './logo/logo';

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
    MenuIcon,
    SettingsIcon,
    PresentationIcon,
    Logo,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit {
  stateService = inject(StateService);
  document = inject(DOCUMENT);
  translateService = inject(TranslateService);
  changeDetector = inject(ChangeDetectorRef);
  localStorageService = inject(LocalStorageService);
  router = inject(Router);
  state: State = {};
  localStorageSettings: State = {};
  layout?: Layout;
  maxWidth?: number;
  darkModeMediaQuery?: MediaQueryList;
  theme?: Theme = 'system';
  language: ContentLanguage = 'en';
  rootElement?: HTMLElement | null;
  routes: Routes;

  @HostListener('document:keydown', ['$event'])
  handlePresentKeys(event: KeyboardEvent) {
    if (this.stateService.getState()().layout === 'fixed' && event.ctrlKey && event.key === 'F5') {
      event.preventDefault();
      this.present();
    }
  }

  constructor() {
    this.routes = routes;
  }

  ngOnInit(): void {
    this.setInitialLayout();
    this.setInitialMaxWidth();
    this.setInitialTheme();
    this.setInitialLanguage();
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.rootElement = document.documentElement;

      document.addEventListener('fullscreenchange', () => {
        if (this.document.fullscreenElement === null) {
          this.exitFullscreen();
        }
      });
    }
  }

  exitFullscreen(): void {
    this.rootElement?.classList.remove('fullscreen');
    this.updateFullscreenStateAndUI(false);

    if (this.document.fullscreenElement === null) {
      this.focusCurrentSlide();
    }
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

  setInitialMaxWidth(): void {
    const initialMaxWidthLocalStorage = this.localStorageService.getLocalStorage()?.maxWidth;

    if (initialMaxWidthLocalStorage) {
      this.maxWidth = initialMaxWidthLocalStorage;
    } else {
      this.maxWidth = this.stateService.getState()().maxWidth;
    }
    this.updateMaxWidth(true);
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
    } else {
      this.language = this.stateService.getState()().language as ContentLanguage;
    }
    this.updateLanguage(this.language, true);
  }

  updateLayout(noLocalStorageChanges = false): void {
    this.state['layout'] = this.layout;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ layout: this.layout });
    }

    setTimeout(() => {
      this.rootElement?.classList.remove(
        this.layout === 'fixed' ? 'flexible-layout' : 'fixed-layout',
      );
      this.rootElement?.classList.add(this.layout === 'fixed' ? 'fixed-layout' : 'flexible-layout');
    });
  }

  updateMaxWidth(noLocalStorageChanges = false): void {
    this.state['maxWidth'] = this.maxWidth;
    this.stateService.setState(this.state);

    this.focusCurrentSlide();

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ maxWidth: this.maxWidth });
    }
  }

  updateTheme(theme: Theme): void {
    this.theme = theme;
    this.updateDarkMode();
  }

  updateDarkMode(noLocalStorageChanges = false): void {
    this.state['theme'] = this.theme;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ theme: this.theme });
    }

    if (typeof this.theme !== 'undefined') {
      this.setColorScheme();
    }
  }

  setColorScheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty(
        'color-scheme',
        this.theme === 'dark' ? 'dark' : this.theme === 'light' ? 'light' : 'light dark',
      );
    }
  }

  isDecreaseButtonDisabled(): boolean {
    return !this.maxWidth || this.maxWidth < WIDTH_MIN + WIDTH_STEP;
  }

  isIncreaseButtonDisabled(): boolean {
    return !this.maxWidth || this.maxWidth > WIDTH_MAX - WIDTH_STEP;
  }

  decreaseWidth(): void {
    if (!this.maxWidth || this.isDecreaseButtonDisabled()) return;
    this.maxWidth = this.maxWidth - WIDTH_STEP;
    this.updateMaxWidth();
  }

  increaseWidth(): void {
    if (!this.maxWidth || this.isIncreaseButtonDisabled()) return;
    this.maxWidth = this.maxWidth + WIDTH_STEP;
    this.updateMaxWidth();
  }

  async present(): Promise<void> {
    if (!document.fullscreenElement) {
      const currentSlide = this.stateService.getState()().currentSlide;

      await document.documentElement.requestFullscreen();
      this.rootElement?.classList.add('fullscreen');
      this.updateFullscreenStateAndUI(true);
      setTimeout(() => {
        this.document.querySelectorAll<HTMLElement>('app-slide')[currentSlide ?? 0]?.focus();
      });
    }
  }

  focusCurrentSlide(): void {
    const currentSlide = this.stateService.getState()().currentSlide ?? 0;

    const currentSlideElement =
      this.document.querySelectorAll<HTMLElement>('app-slide')[currentSlide];

    if (currentSlideElement) {
      setTimeout(() => {
        currentSlideElement.setAttribute('tabindex', '0');
        currentSlideElement.focus();
        currentSlideElement.scrollIntoView({
          behavior: 'instant',
          block: 'center',
          inline: 'center',
        });
        currentSlideElement.removeAttribute('tabindex');
      });
    }
  }

  updateFullscreenStateAndUI(isFullscreen: boolean): void {
    this.state['isFullscreen'] = isFullscreen;
    this.stateService.setState(this.state);
  }

  updateLanguage(language: ContentLanguage, noLocalStorageChanges = false): void {
    this.translateService.use(language);
    this.document.documentElement.setAttribute('lang', language);

    this.state['language'] = language;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ language: language });
    }
  }

  closeMenuPopover(): void {
    const menuPopover = this.document.getElementById('main-menu');
    menuPopover?.hidePopover();
  }
}
