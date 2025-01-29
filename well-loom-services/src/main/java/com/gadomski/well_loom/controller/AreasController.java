package com.gadomski.well_loom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.Area;
import com.gadomski.well_loom.service.AreaService;

@RestController
@RequestMapping("/api")
public class AreasController {
    @Autowired
    private AreaService areaService;

    @GetMapping("/areas")
    public ResponseEntity<List<Area>> getAreas() {
        // TODO: Handle request paramenters (key-value on input or hardcode possible
        // columns?).
        // Add logic to call getAllAreas in service if no params, else call a search
        // service
        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(areaService.getAllAreas());
    }

    @GetMapping("/areas/{id}")
    public String getAreaById(@PathVariable long id) {
        // TODO: Return area fetched via id
        return "delete me";
    }
}