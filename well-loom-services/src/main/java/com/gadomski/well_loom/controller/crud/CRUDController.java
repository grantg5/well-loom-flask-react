package com.gadomski.well_loom.controller.crud;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.service.crud.CRUDService;

@RestController
public abstract class CRUDController<T> {
    private final CRUDService<T, Long> service;

    public CRUDController(CRUDService<T, Long> service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity
            .ok()
            .contentType(MediaType.APPLICATION_JSON)
            .body(service.getAll());
    }
}