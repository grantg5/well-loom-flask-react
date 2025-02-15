package com.gadomski.well_loom.dao.area;

import java.util.ArrayList;
import java.util.List;

import com.gadomski.well_loom.dto.AreaDTO;
import com.gadomski.well_loom.model.Area;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

public class AreaRepositoryImpl implements AreaRepositoryCustom {

    private EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    private List<Area> getAllAreas() {
        String hql = "SELECT a FROM Area a WHERE a.isActive = true";
        return entityManager.createQuery(hql, Area.class).getResultList();
    }

    public List<Area> findAllAreasWithRelationships() {
        return getAllAreas();
    }

    public List<AreaDTO> findAllAreas() {
        List<Area> rawAreas = getAllAreas();
        List<AreaDTO> trimmedAreas = new ArrayList<AreaDTO>();

        for (Area area : rawAreas) {
            trimmedAreas.add(new AreaDTO(area));
        }

        return trimmedAreas;
    }
}