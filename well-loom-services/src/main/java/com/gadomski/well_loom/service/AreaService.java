package com.gadomski.well_loom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadomski.well_loom.dao.area.AreaRepository;
import com.gadomski.well_loom.dto.AreaDTO;
import com.gadomski.well_loom.model.Area;

import jakarta.transaction.Transactional;

@Service
public class AreaService {
    private final AreaRepository areaRepository;

    @Autowired
    public AreaService(AreaRepository areaRepo) {
        this.areaRepository = areaRepo;
    }

    @Transactional
    public List<Area> getAllAreasWithRelationships() {
        return areaRepository.findAllAreasWithRelationships();
    }

    @Transactional
    public List<AreaDTO> getAllAreas() {
        return areaRepository.findAllAreas();
    }
}