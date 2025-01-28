package com.gadomski.well_loom.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gadomski.well_loom.model.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    @Query("SELECT a FROM Area a WHERE isActive = true")
    List<Area> findAllAreas();
}