package com.gadomski.well_loom.dao;

import org.springframework.stereotype.Repository;

import com.gadomski.well_loom.model.PracticeGroup;

@Repository
public interface PracticeGroupRepository extends CRUDRepository<PracticeGroup, Long> {
}