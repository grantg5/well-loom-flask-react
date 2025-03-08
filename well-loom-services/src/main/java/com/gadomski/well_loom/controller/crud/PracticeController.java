package com.gadomski.well_loom.controller.crud;

import com.gadomski.well_loom.model.Practice;
import com.gadomski.well_loom.service.crud.PracticeService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/practices")
public class PracticeController extends CRUDController<Practice> {
    public PracticeController(PracticeService service) {
        super(service);
    }
}
