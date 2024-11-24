import { Component } from '@angular/core';
import {StudentSurvey} from '../studentInfo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})


export class SurveyFormComponent {
  survey = new StudentSurvey(
    0, // ID (default value; will be replaced when saving to the database)
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

  submitForm() {
    console.log('Survey Submitted:', this.survey);
    alert('Survey submitted successfully!');
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
