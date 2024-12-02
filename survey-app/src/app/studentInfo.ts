/* Jaime Pena G01300925
Srikitha kandra G01409182 */
export class StudentSurvey {
    id: number;
    firstName: string;
    lastName: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
    telephone?: string;
    email: string;
    dateOfSurvey: Date;
    likedFeatures: string; // Comma-separated values
    interestSource: string;
    recommendation: string;
    additionalComments?: string;
  
    constructor(
      id:number,
      firstName: string,
      lastName: string,
      email: string,
      dateOfSurvey: Date,
      likedFeatures: string,
      interestSource: string,
      recommendation: string,
      streetAddress?: string,
      city?: string,
      state?: string,
      zip?: string,
      telephone?: string,
      additionalComments?: string
    ) {
      this.id = id
      this.firstName = firstName;
      this.lastName = lastName;
      this.streetAddress = streetAddress;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.telephone = telephone;
      this.email = email;
      this.dateOfSurvey = dateOfSurvey;
      this.likedFeatures = likedFeatures;
      this.interestSource = interestSource;
      this.recommendation = recommendation;
      this.additionalComments = additionalComments;
    }
  
    // Convert likedFeatures string to an array
    getLikedFeaturesArray(): string[] {
      return this.likedFeatures ? this.likedFeatures.split(',') : [];
    }
  
    // Convert an array to a comma-separated likedFeatures string
    setLikedFeaturesArray(features: string[]): void {
      this.likedFeatures = features.join(',');
    }
  }
  