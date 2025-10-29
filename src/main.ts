import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Import by Arif for bootstrap js files through NPM
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
