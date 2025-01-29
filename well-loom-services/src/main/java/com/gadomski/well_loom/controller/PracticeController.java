package com.gadomski.well_loom.controller;

import com.example.demo.entity.Practice;
import com.example.demo.service.PracticeService;
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
