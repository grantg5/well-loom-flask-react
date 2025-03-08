package com.gadomski.well_loom.controller.crud;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.model.Area;
import com.gadomski.well_loom.service.crud.AreaService;

@RestController
@RequestMapping("/api/areas")
public class AreaController extends CRUDController<Area> {
    public AreaController(AreaService service) {
        super(service);
    }
}
