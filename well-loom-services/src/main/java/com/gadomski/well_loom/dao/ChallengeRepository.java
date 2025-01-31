package com.gadomski.well_loom.dao;

import com.gadomski.well_loom.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    @Query("SELECT c FROM Challenge c WHERE c.isActive = true")
    List<Challenge> findAllActiveChallenges();
}
