package com.gadomski.well_loom.controller;

import com.gadomski.well_loom.model.Practice;
import com.gadomski.well_loom.service.PracticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PracticeController {

    @Autowired
    private PracticeService practiceService;

    @GetMapping("/practices")
    public ResponseEntity<List<Practice>> getAllPractices() {
        return ResponseEntity.ok().body(practiceService.getAllPractices());
    }
}
