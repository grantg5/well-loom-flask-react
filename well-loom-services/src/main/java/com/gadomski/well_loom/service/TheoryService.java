package com.gadomski.well_loom.service;

import com.example.demo.entity.Theory;
import com.example.demo.repository.TheoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TheoryService {
    private final TheoryRepository theoryRepository;

    @Autowired
    public TheoryService(TheoryRepository theoryRepository) {
        this.theoryRepository = theoryRepository;
    }

    public List<Theory> getAllTheories() {
        return theoryRepository.findAllActiveTheories();
    }
}
