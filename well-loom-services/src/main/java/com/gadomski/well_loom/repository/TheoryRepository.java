package com.gadomski.well_loom.repository;

import com.gadomski.well_loom.model.Theory;
import org.springframework.stereotype.Repository;

@Repository
public interface TheoryRepository extends CRUDRepository<Theory, Long> {
}
