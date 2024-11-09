import { ApplicationConfig, importProvidersFrom, Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule, provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideMarkdown } from 'ngx-markdown';
import { WordEffects } from './states/word.effects';
import { reducer, wordFeatureKey } from './states/word.reducer';


// @Injectable()
// export class MyHammerConfig extends HammerGestureConfig {
//   override overrides = <any>{
//     swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
//     pinch: { enable: false },
//     rotate: { enable: false },
//     pan: { enable: false }
//   };
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    // importProvidersFrom(HammerModule),
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    provideHttpClient(),
    provideMarkdown({ loader: HttpClient }),
    provideStore({
      [wordFeatureKey]: reducer
    }),
    provideEffects([WordEffects]), provideClientHydration()
]
};
