package com.gadomski.well_loom.service.crud;

import org.springframework.stereotype.Service;

import com.gadomski.well_loom.model.Area;
import com.gadomski.well_loom.repository.crud.AreaRepository;

@Service
public class AreaService extends CRUDService<Area, Long> {
    public AreaService(AreaRepository areaRepo) {
        super(areaRepo);
    }
}
