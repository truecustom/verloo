import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideMarkdown } from 'ngx-markdown';
import { WordEffects } from './states/word.effects';
import { reducer, wordFeatureKey } from './states/word.reducer';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMarkdown({ loader: HttpClient }),
    provideStore({
      [wordFeatureKey]: reducer
    }),
    provideEffects([WordEffects]),
    provideClientHydration()
]
};
