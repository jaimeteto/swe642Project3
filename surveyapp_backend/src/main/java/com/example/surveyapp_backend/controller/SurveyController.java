/* Jaime Pena G01300925
Srikitha kandra G01409182 */
package com.example.surveyapp_backend.controller;

import com.example.surveyapp_backend.model.Survey;
import com.example.surveyapp_backend.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    // Get all surveys
    @GetMapping
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    // Create a new survey
    @PostMapping
    public ResponseEntity<Survey> createSurvey(@RequestBody Survey survey) {
        Survey createdSurvey = surveyRepository.save(survey);
        return new ResponseEntity<>(createdSurvey, HttpStatus.CREATED);
    }

    // Update an existing survey
    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable Long id, @RequestBody Survey survey) {
        if (surveyRepository.existsById(id)) {
            survey.setId(id);
            Survey updatedSurvey = surveyRepository.save(survey);
            return new ResponseEntity<>(updatedSurvey, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a survey by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long id) {
        if (surveyRepository.existsById(id)) {
            surveyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
