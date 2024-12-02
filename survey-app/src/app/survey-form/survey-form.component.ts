/* Jaime Pena G01300925
Srikitha kandra G01409182 */
import { Component } from '@angular/core';
import {StudentSurvey} from '../studentInfo';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})


export class SurveyFormComponent {
  survey = new StudentSurvey(
    0,
    '', // firstName
    '', // lastName
    '', // email
    new Date(), // dateOfSurvey
    '', // likedFeatures (comma-separated string)
    '', // interestSource
    '' // recommendation
  );
  likedFeaturesOptions = [
    'Students',
    'Location',
    'Campus',
    'Atmosphere',
    'Dorm Rooms',
    'Sports',
  ];

  interestSources = ['Friends', 'Television', 'Internet', 'Other'];

  recommendations = ['Very Likely', 'Likely', 'Unlikely'];
  constructor(private http: HttpClient,private router: Router) {}

  submitForm(form:any) {
    if(form.valid){
    const surveyData = {
      firstName: this.survey.firstName,
      lastName: this.survey.lastName,
      city:this.survey.city,
      email: this.survey.email,
      dateOfSurvey: this.survey.dateOfSurvey,
      likedFeatures: this.survey.likedFeatures, // As a comma-separated string
      interestSource: this.survey.interestSource,
      recommendation: this.survey.recommendation,
      additionalComments:this.survey.additionalComments
    };
    console.log('Survey Submitted:', this.survey);
    this.http.post('http://localhost:8081/api/surveys', surveyData).subscribe({
      next: (response) => {
        console.log('Survey submitted successfully:', response);
      },
      error: (error) => {
        console.error('Error submitting survey:', error);
      },
    });
    
    alert('Survey submitted successfully!');
    this.router.navigate(['/']);
  }
  else{
    alert('Form is invalid. Please fill out all required fields.');
  }
  }
  cancelForm() {
    this.survey = new StudentSurvey(
      0,
      '',
      '',
      '',
      new Date(),
      '',
      '',
      ''
    );
  }
  toggleLikedFeature(feature: string): void {
    const featuresArray = this.survey.getLikedFeaturesArray();
    if (featuresArray.includes(feature)) {
      this.survey.setLikedFeaturesArray(featuresArray.filter(f => f !== feature));
    } else {
      featuresArray.push(feature);
      this.survey.setLikedFeaturesArray(featuresArray);
    }
  }

}
