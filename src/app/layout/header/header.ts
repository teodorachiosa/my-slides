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

import { State, Theme, View } from '@shared/models/state.model';
import { ContentLanguage } from '@shared/models/content-language.model';
import { StateService } from '@shared/services/state.service';
import { MenuIcon } from '@shared/components/icons/menu-icon/menu-icon';
import { SettingsIcon } from '@shared/components/icons/settings-icon/settings-icon';
import { PresentationIcon } from '@shared/components/icons/presentation-icon/presentation-icon';
import { routes } from 'app/app.routes';
import { Logo } from '@shared/components/icons/logo/logo';
import {
  LOCAL_STORAGE_ITEM_NAME,
  LocalStorageService,
} from '@shared/services/local-storage.service';

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
  view?: View;
  maxWidth?: number;
  darkModeMediaQuery?: MediaQueryList;
  theme?: Theme = 'system';
  language: ContentLanguage = 'en';
  rootElement?: HTMLElement | null;
  routes: Routes;

  @HostListener('document:keydown', ['$event'])
  handlePresentKeys(event: KeyboardEvent) {
    if (this.stateService.getState().view === 'slide' && event.ctrlKey && event.key === 'F5') {
      event.preventDefault();
      this.present();
    }
  }

  constructor() {
    this.routes = routes;
  }

  ngOnInit(): void {
    if (this.localStorageService.getLocalStorage()?.view) {
      this.view = this.localStorageService.getLocalStorage()?.view;
    } else {
      this.view = this.stateService.getState().view;
    }
    this.updateView(true);

    if (this.localStorageService.getLocalStorage()?.maxWidth) {
      this.maxWidth = this.localStorageService.getLocalStorage()?.maxWidth;
    } else {
      this.maxWidth = this.stateService.getState().maxWidth;
    }
    this.updateMaxWidth(true);

    if (typeof this.localStorageService.getLocalStorage()?.theme !== 'undefined') {
      this.theme = this.localStorageService.getLocalStorage()?.theme;
      this.updateDarkMode(true);
    } else {
      if (this.stateService.getState().theme) {
        this.theme = this.stateService.getState().theme;
        this.updateDarkMode(true);
      }
    }

    if (this.localStorageService.getLocalStorage()?.language) {
      this.language = this.localStorageService.getLocalStorage()?.language as ContentLanguage;
    } else {
      this.language = this.stateService.getState().language as ContentLanguage;
    }
    this.updateLanguage(this.language, true);
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.rootElement = document.documentElement;

      if (this.view) {
        this.rootElement?.classList.add(`${this.view}-view`);
      }

      document.addEventListener('fullscreenchange', () => {
        this.exitFullscreen();
      });
    }
  }

  updateView(noLocalStorageChanges: boolean = false): void {
    this.state['view'] = this.view;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ view: this.view });
    }

    setTimeout(() => {
      this.rootElement?.classList.remove(this.view === 'slide' ? 'web-view' : 'slide-view');
      this.rootElement?.classList.add(this.view === 'slide' ? 'slide-view' : 'web-view');
    });
  }

  updateMaxWidth(noLocalStorageChanges: boolean = false): void {
    this.state['maxWidth'] = this.maxWidth;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ maxWidth: this.maxWidth });
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

  updateTheme(theme: Theme): void {
    this.theme = theme;
    this.updateDarkMode();
  }

  updateDarkMode(noLocalStorageChanges: boolean = false): void {
    this.state['theme'] = this.theme;
    this.stateService.setState(this.state);

    if (!noLocalStorageChanges) {
      this.localStorageService.setToLocalStorage({ theme: this.theme });
    }

    if (typeof this.theme !== 'undefined') {
      this.setColorScheme();
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

  resetWidth(): void {
    if (!this.maxWidth) return;

    this.maxWidth = 100;
    this.updateMaxWidth(true);

    this.localStorageService.removeFromLocalStorage(LOCAL_STORAGE_ITEM_NAME);
    const stateWithoutMaxWidth = this.state;
    delete stateWithoutMaxWidth.maxWidth;
    this.localStorageService.setToLocalStorage(stateWithoutMaxWidth);
  }

  async present(): Promise<void> {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      this.rootElement?.classList.add('fullscreen');
      this.updateFullscreenStateAndUI(true);
      setTimeout(() => {
        this.document
          .querySelectorAll<HTMLElement>('app-slide')
          [this.stateService.getState().currentSlide ?? 0]?.focus();
      });
    }
  }

  exitFullscreen(): void {
    if (document.fullscreenElement) return;

    this.rootElement?.classList.remove('fullscreen');
    this.updateFullscreenStateAndUI(false);

    this.document
      .querySelectorAll<HTMLElement>('app-slide')
      [this.stateService.getState().currentSlide ?? 0]?.focus();
  }

  updateFullscreenStateAndUI(isFullscreen: boolean): void {
    this.state['isFullscreen'] = isFullscreen;
    this.stateService.setState(this.state);
  }

  updateLanguage(language: ContentLanguage, noLocalStorageChanges: boolean = false): void {
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
