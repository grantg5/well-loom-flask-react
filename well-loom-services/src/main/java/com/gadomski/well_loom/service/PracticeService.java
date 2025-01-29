package com.gadomski.well_loom.service;

import com.example.demo.entity.Practice;
import com.example.demo.repository.PracticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PracticeService {
    private final PracticeRepository practiceRepository;

    @Autowired
    public PracticeService(PracticeRepository practiceRepository) {
        this.practiceRepository = practiceRepository;
    }

    public List<Practice> getAllPractices() {
        return practiceRepository.findAllActivePractices();
    }
}
