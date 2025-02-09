import {ApplicationConfig, ErrorHandler} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {GlobalErrorHandler} from "./services/globle-error-handler";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ]
};
