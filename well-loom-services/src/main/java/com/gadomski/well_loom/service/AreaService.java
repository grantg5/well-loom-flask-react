package com.gadomski.well_loom.service;

import org.springframework.stereotype.Service;

import com.gadomski.well_loom.dao.AreaRepository;
import com.gadomski.well_loom.model.Area;

@Service
public class AreaService extends CRUDService<Area, Long> {
    public AreaService(AreaRepository areaRepo) {
        super(areaRepo);
    }
}
