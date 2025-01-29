package com.gadomski.well_loom.dao;

import com.example.demo.entity.Theory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TheoryRepository extends JpaRepository<Theory, Long> {
    @Query("SELECT t FROM Theory t WHERE t.isActive = true")
    List<Theory> findAllActiveTheories();
}
