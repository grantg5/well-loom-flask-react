package com.gadomski.well_loom.dao.area;

import java.util.List;

import com.gadomski.well_loom.dto.AreaDTO;
import com.gadomski.well_loom.model.Area;

public interface AreaRepositoryCustom {
    List<AreaDTO> findAllAreas();
    List<Area> findAllAreasWithRelationships();
}
