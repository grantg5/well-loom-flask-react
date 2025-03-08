package com.gadomski.well_loom.controller.crud;

import com.gadomski.well_loom.model.Theory;
import com.gadomski.well_loom.service.crud.TheoryService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/theories")
public class TheoryController extends CRUDController<Theory> {
    public TheoryController(TheoryService service) {
        super(service);
    }
}
