import { Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
  { path: 'survey-form', component: SurveyFormComponent }, // Route for survey form
  {path:'survey-list',component:SurveyListComponent}//route for surveyList
];
