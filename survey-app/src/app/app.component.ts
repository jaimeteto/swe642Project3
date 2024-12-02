/* Jaime Pena G01300925
Srikitha kandra G01409182 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';


@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'survey-app';
}
