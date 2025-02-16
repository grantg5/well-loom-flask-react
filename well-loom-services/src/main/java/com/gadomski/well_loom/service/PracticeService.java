package com.gadomski.well_loom.service;

import com.gadomski.well_loom.model.Practice;
import com.gadomski.well_loom.dao.PracticeRepository;
import org.springframework.stereotype.Service;

@Service
public class PracticeService extends CRUDService<Practice, Long> {
    public PracticeService(PracticeRepository repo) {
        super(repo);
    }
}
