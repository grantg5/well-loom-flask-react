package com.gadomski.well_loom.dao;

import com.example.demo.entity.Practice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PracticeRepository extends JpaRepository<Practice, Long> {
    @Query("SELECT p FROM Practice p WHERE p.isActive = true")
    List<Practice> findAllActivePractices();
}
