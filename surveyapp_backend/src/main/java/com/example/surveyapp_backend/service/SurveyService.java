package com.example.surveyapp_backend.service;

import com.example.surveyapp_backend.model.Survey;
import com.example.surveyapp_backend.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    // Create or Update a Survey
    public Survey saveSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    // Get all Surveys
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    // Get Survey by ID
    public Optional<Survey> getSurveyById(Long id) {
        return surveyRepository.findById(id);
    }

    // Delete Survey by ID
    public void deleteSurvey(Long id) {
        surveyRepository.deleteById(id);
    }
}
