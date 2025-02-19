package com.gadomski.well_loom.controller;

import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.Views;
import com.gadomski.well_loom.service.CRUDService;

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
    public ResponseEntity<MappingJacksonValue> getAll(@RequestParam(name = "includeFullEntityMap", required = false, defaultValue = "false") boolean includeFullEntityMap) {
        Class<?> jsonView;

        if (includeFullEntityMap) {
            jsonView = Views.EntityWithRelationships.class;
        } else {
            jsonView = Views.PlainEntity.class;
            System.out.println("In plan entity");
        }

        MappingJacksonValue mjv = new MappingJacksonValue(service.getAll());
        mjv.setSerializationView(jsonView);

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(mjv);
    }
}
