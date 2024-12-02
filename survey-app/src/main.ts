/* Jaime Pena G01300925
Srikitha kandra G01409182 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));
