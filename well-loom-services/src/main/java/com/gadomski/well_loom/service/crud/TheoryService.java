package com.gadomski.well_loom.service.crud;

import com.gadomski.well_loom.model.Theory;
import com.gadomski.well_loom.repository.crud.TheoryRepository;

import org.springframework.stereotype.Service;

@Service
public class TheoryService extends CRUDService<Theory, Long> {
    public TheoryService(TheoryRepository repo) {
        super(repo);
    }
}
