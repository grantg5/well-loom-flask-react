package com.gadomski.well_loom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.PracticeGroup;
import com.gadomski.well_loom.service.PracticeGroupService;

@RestController
@RequestMapping("/api")
public class PracticeGroupsController {
    @Autowired
    private PracticeGroupService practiceGroupService;

    @GetMapping("/practice-groups")
    public ResponseEntity<List<PracticeGroup>> getPracticeGroups() {
        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(practiceGroupService.getAllpracticeGroups());
    }
}