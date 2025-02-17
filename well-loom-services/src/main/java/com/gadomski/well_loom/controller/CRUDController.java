package com.gadomski.well_loom.controller;

import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.Views;
import com.gadomski.well_loom.service.CRUDService;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public abstract class CRUDController<T> {
    private final CRUDService<T, Long> service;

    public CRUDController(CRUDService<T, Long> service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<MappingJacksonValue> getAll(@RequestParam(name = "includeRelationships", required = false, defaultValue = "false") boolean includeRelationships) {
        Class<?> jsonView;

        if (includeRelationships) {
            jsonView = Views.EntityWithRelationships.class;
        } else {
            jsonView = Views.PlainEntity.class;
        }

        MappingJacksonValue mjv = new MappingJacksonValue(service.getAll());
        mjv.setSerializationView(jsonView);

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(mjv);
    }
}
