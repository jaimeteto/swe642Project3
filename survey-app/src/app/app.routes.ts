import { Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
  { path: 'survey-form', component: SurveyFormComponent } // Route for survey form
];
