package com.gadomski.well_loom.service;

import com.gadomski.well_loom.model.Challenge;
import com.gadomski.well_loom.repository.ChallengeRepository;

import org.springframework.stereotype.Service;

@Service
public class ChallengeService extends CRUDService<Challenge, Long> {
    public ChallengeService(ChallengeRepository repo) {
        super(repo);
    }
}
