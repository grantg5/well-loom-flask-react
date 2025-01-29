package com.gadomski.well_loom.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.gadomski.well_loom.model.PracticeGroup;

@Repository
public interface PracticeGroupRepository extends JpaRepository<PracticeGroup, Long> {
    @Query("SELECT p FROM PracticeGroup p WHERE isActive = true")
    List<PracticeGroup> findAllPracticeGroups();
}