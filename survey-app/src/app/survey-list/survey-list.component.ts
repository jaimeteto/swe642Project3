import { Component, OnInit } from '@angular/core';
import { StudentSurvey } from '../studentInfo';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-survey-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit {
  surveys: StudentSurvey[] = []; // Using your class for the survey objects

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  //   // Create dummy data using your `StudentSurvey` class
  //   this.surveys = [
  //     new StudentSurvey(
  //       1,
  //       'Jaime',
  //       'Pena',
  //       'jaime.teto@gmail.com',
  //       new Date('2024-11-21'),
  //       'Campus Tour,Library',
  //       'Advertisement',
  //       'Very Likely',
  //       '15259 Waterwheel Ter',
  //       'Woodbridge',
  //       'Virginia',
  //       '22191',
  //       '5714477237',
  //       'Great experience!'
  //     ),
  //     new StudentSurvey(
  //       2,
  //       'John',
  //       'Doe',
  //       'john.doe@example.com',
  //       new Date('2024-10-15'),
  //       'Facilities,Location',
  //       'Social Media',
  //       'Likely',
  //       '1234 Elm Street',
  //       'Springfield',
  //       'Illinois',
  //       '62704',
  //       '2175551234',
  //       'Very organized campus.'
  //     ),
  //   ];
  // }
  this.http.get<StudentSurvey[]>('http://localhost:8081/api/surveys').subscribe({
    next: (data) => {console.log('GET response:', data);
                      this.surveys = data;
                    },
    error: (err) => console.error('Error fetching surveys', err),
  });
}
}