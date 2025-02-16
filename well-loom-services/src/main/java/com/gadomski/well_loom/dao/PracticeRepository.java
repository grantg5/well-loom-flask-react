package com.gadomski.well_loom.dao;

import com.gadomski.well_loom.model.Practice;
import org.springframework.stereotype.Repository;

@Repository
public interface PracticeRepository extends CRUDRepository<Practice, Long> {
}
