// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { FormService } from '../app/forms/form-field1/form-service'; // Adjust the path as needed

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    FormService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()
  ]
};
