package com.gadomski.well_loom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gadomski.well_loom.dao.PracticeGroupRepository;
import com.gadomski.well_loom.model.PracticeGroup;

@Service
public class PracticeGroupService {
    private final PracticeGroupRepository practiceGroupRepository;

    @Autowired
    public PracticeGroupService(PracticeGroupRepository practiceGroupRepo) {
        this.practiceGroupRepository = practiceGroupRepo;
    }

    public List<PracticeGroup> getAllpracticeGroups() {
        return practiceGroupRepository.findAllPracticeGroups();
    }
}