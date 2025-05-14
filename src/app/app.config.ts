// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { FormService } from '../app/forms/form-field1/form-service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Adjust the path as needed
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    FormService,
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
