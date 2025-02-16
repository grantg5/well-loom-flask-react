package com.gadomski.well_loom.service;

import org.springframework.stereotype.Service;

import com.gadomski.well_loom.dao.PracticeGroupRepository;
import com.gadomski.well_loom.model.PracticeGroup;

@Service
public class PracticeGroupService extends CRUDService<PracticeGroup, Long> {
    public PracticeGroupService(PracticeGroupRepository repo) {
        super(repo);
    }
}