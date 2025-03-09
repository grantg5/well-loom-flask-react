package com.gadomski.well_loom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.service.RelationshipMappingService;

@RestController
public class RelationshipMappingController {
    private RelationshipMappingService rms;

    @Autowired
    public RelationshipMappingController(RelationshipMappingService rms) {
        this.rms = rms;
    }

    @GetMapping
    public ResponseEntity<List<T>> getRelatedEntities(
      @RequestParam(name = "entity_1") String entity1,
      @RequestParam(name = "entity_2") String entity2,
      @RequestParam(name = "entity_1_id") int entity1Id,
      @RequestParam(name = "entity_2_id", required = false) int entity2Id
    ) {
        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(rms.getRelatedEntities());
    }
}
