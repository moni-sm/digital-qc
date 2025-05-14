// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
<<<<<<< HEAD
import { FormService } from '../app/forms/form-field1/form-service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Adjust the path as needed
import { provideHttpClient } from '@angular/common/http';
=======
import { FormService } from '../app/forms/form-field1/form-service'; // Adjust the path as needed
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    FormService,
<<<<<<< HEAD
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync()
=======
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
  ]
};
