package com.gadomski.well_loom.service;

import com.example.demo.entity.Challenge;
import com.example.demo.repository.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ChallengeService {
    private final ChallengeRepository challengeRepository;

    @Autowired
    public ChallengeService(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAllActiveChallenges();
    }
}
