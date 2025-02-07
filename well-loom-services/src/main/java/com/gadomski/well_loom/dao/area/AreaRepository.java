package com.gadomski.well_loom.dao.area;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gadomski.well_loom.model.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long>, AreaRepositoryCustom {

}