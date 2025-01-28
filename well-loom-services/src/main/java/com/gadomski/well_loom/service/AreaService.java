package com.gadomski.well_loom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadomski.well_loom.dao.AreaRepository;
import com.gadomski.well_loom.model.Area;

@Service
public class AreaService {
    private final AreaRepository areaRepository;

    @Autowired
    public AreaService(AreaRepository areaRepo) {
        this.areaRepository = areaRepo;
    }

    public List<Area> getAllAreas() {
        return areaRepository.findAllAreas();
    }
}