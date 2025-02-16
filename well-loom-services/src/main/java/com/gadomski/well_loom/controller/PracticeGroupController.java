package com.gadomski.well_loom.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.PracticeGroup;
import com.gadomski.well_loom.service.PracticeGroupService;

@RestController
@RequestMapping("/api/practice-groups")
public class PracticeGroupController extends CRUDController<PracticeGroup> {
    public PracticeGroupController(PracticeGroupService service) {
        super(service);
    }
}