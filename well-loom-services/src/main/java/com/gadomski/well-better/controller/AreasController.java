package com.gadomski.well_loom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

@RestController
@RequestMapping("/api")
public class AreasController {
    @GetMapping("/areas")
    public String getAreas() {
        // TODO: Handle request paramenters (key-value on input or hardcode possible columns?).
        //       Add logic to call getAllAreas in service if no params, else call a search service

        // TODO: Verify that I should return a string, call the AreaService's method to get all areas
        return "delete me";
    }

    @GetMapping("/areas/{id}")
    public String getAreaById(@PathVariable long id) {
        // TODO: Return area fetched via id
        return "delete me";
    }
}