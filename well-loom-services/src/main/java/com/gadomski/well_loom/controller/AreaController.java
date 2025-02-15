package com.gadomski.well_loom.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gadomski.well_loom.dto.AreaDTO;
import com.gadomski.well_loom.model.Area;
import com.gadomski.well_loom.service.AreaService;

@RestController
@RequestMapping("/api")
public class AreaController {
    @Autowired
    private AreaService areaService;

    @GetMapping("/areas")
    public ResponseEntity<List<Area>> getAreas(
            @RequestParam("includeRelations") Optional<Boolean> includeRelationsInput) {
        boolean includeRelations = includeRelationsInput.orElse(false);

        List<Area> areas = new ArrayList<Area>();

        if (includeRelations == true) {
            areas = areaService.getAllAreasWithRelationships();
        } else {
            List<AreaDTO> trimmedAreas = areaService.getAllAreas();

            for (AreaDTO areaDTO : trimmedAreas) {
                areas.add(new Area(areaDTO));
            }
        }

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(areas);
    }

    @GetMapping("/areas/{id}")
    public String getAreaById(@PathVariable long id) {
        // TODO: Return area fetched via id
        return "delete me";
    }
}