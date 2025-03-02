package com.gadomski.well_loom.service;

import org.springframework.stereotype.Service;

import com.gadomski.well_loom.model.PracticeGroup;
import com.gadomski.well_loom.repository.PracticeGroupRepository;

@Service
public class PracticeGroupService extends CRUDService<PracticeGroup, Long> {
    public PracticeGroupService(PracticeGroupRepository repo) {
        super(repo);
    }
}