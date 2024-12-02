/* Jaime Pena G01300925
Srikitha kandra G01409182 */
package com.example.surveyapp_backend.repository;

import com.example.surveyapp_backend.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Survey entity.
 * Extends JpaRepository to provide CRUD operations and database interaction methods.
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // JpaRepository includes methods like save(), findById(), findAll(), deleteById(), etc.
}
