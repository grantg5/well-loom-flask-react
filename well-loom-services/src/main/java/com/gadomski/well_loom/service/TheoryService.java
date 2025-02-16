package com.gadomski.well_loom.service;

import com.gadomski.well_loom.model.Theory;
import com.gadomski.well_loom.dao.TheoryRepository;
import org.springframework.stereotype.Service;

@Service
public class TheoryService extends CRUDService<Theory, Long> {
    public TheoryService(TheoryRepository repo) {
        super(repo);
    }
}
