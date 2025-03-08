package com.gadomski.well_loom.service.crud;

import com.gadomski.well_loom.model.Practice;
import com.gadomski.well_loom.repository.crud.PracticeRepository;

import org.springframework.stereotype.Service;

@Service
public class PracticeService extends CRUDService<Practice, Long> {
    public PracticeService(PracticeRepository repo) {
        super(repo);
    }
}
