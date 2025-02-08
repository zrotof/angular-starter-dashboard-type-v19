import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes , withEnabledBlockingInitialNavigation(), withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(FontAwesomeModule),
    provideAnimationsAsync(),
    provideClientHydration(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura
      }
    })
  ]
};
