package com.gadomski.well_loom.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gadomski.well_loom.repository.crud.AreaRepository;
import com.gadomski.well_loom.repository.crud.ChallengeRepository;
import com.gadomski.well_loom.repository.crud.PracticeGroupRepository;
import com.gadomski.well_loom.repository.crud.PracticeRepository;
import com.gadomski.well_loom.repository.crud.TheoryRepository;

@Configuration
public class RepositoryConfig {
    @Bean
    public Map<String, JpaRepository<?, Long>> repositoryMap(
        AreaRepository areaRepo,
        ChallengeRepository challengeRepo,
        PracticeGroupRepository practiceGroupRepo,
        PracticeRepository practiceRepo,
        TheoryRepository theoryRepo
    ) 
    {
        return new HashMap<String, JpaRepository<?, Long>>() {{
            put("area", areaRepo);
            put("challenge", challengeRepo);
            put("practice-group", practiceGroupRepo);
            put("practice_group", practiceGroupRepo);
            put("practicegroup", practiceGroupRepo);
            put("practice", practiceRepo);
            put("theory", theoryRepo);
        }};
    }
}
