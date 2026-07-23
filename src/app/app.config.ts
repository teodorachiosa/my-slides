import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  provideTranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

import { CustomTranslationsLoader } from '@shared/custom-translations-loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withEnabledBlockingInitialNavigation()
    ),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslationsLoader,
        deps: [HttpClient],
      },
      fallbackLang: 'en',
      lang: 'en',
    }),
  ],
};
