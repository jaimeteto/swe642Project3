/* Jaime Pena G01300925
Srikitha kandra G01409182 */
package com.example.surveyapp_backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary Key

    private String firstName;
    private String lastName;
    private String streetAddress;
    private String city;
    private String state;
    private String zip;
    private String telephone;
    private String email;

    private LocalDate dateOfSurvey; // Use LocalDate for survey date

    @Column(length = 1000) // Allow a longer string for comma-separated liked features
    private String likedFeatures;

    private String interestSource; // E.g., "Friends", "Television", etc.
    private String recommendation; // "Very Likely", "Likely", "Unlikely"
    
    @Column(length = 2000) // Allow longer comments
    private String additionalComments;

    // Default Constructor (required by JPA)
    public Survey() {}

    // Constructor
    public Survey(String firstName, String lastName, String streetAddress, String city, String state, String zip,
                  String telephone, String email, LocalDate dateOfSurvey, String likedFeatures, 
                  String interestSource, String recommendation, String additionalComments) {
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

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(LocalDate dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public String getLikedFeatures() {
        return likedFeatures;
    }

    public void setLikedFeatures(String likedFeatures) {
        this.likedFeatures = likedFeatures;
    }

    public String getInterestSource() {
        return interestSource;
    }

    public void setInterestSource(String interestSource) {
        this.interestSource = interestSource;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }

    @Override
    public String toString() {
        return "Survey{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zip='" + zip + '\'' +
                ", telephone='" + telephone + '\'' +
                ", email='" + email + '\'' +
                ", dateOfSurvey=" + dateOfSurvey +
                ", likedFeatures='" + likedFeatures + '\'' +
                ", interestSource='" + interestSource + '\'' +
                ", recommendation='" + recommendation + '\'' +
                ", additionalComments='" + additionalComments + '\'' +
                '}';
    }
}
