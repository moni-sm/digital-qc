// src/app/app.config.server.ts
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

export const config = mergeApplicationConfig(appConfig, {
  providers: []
});
