package com.gadomski.well_loom.controller;

import com.example.demo.entity.Theory;
import com.example.demo.service.TheoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TheoryController {

    @Autowired
    private TheoryService theoryService;

    @GetMapping("/theories")
    public ResponseEntity<List<Theory>> getAllTheories() {
        return ResponseEntity.ok().body(theoryService.getAllTheories());
    }
}
