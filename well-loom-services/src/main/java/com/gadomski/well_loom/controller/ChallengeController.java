package com.gadomski.well_loom.controller;

import com.example.demo.entity.Challenge;
import com.example.demo.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ChallengeController {

    @Autowired
    private ChallengeService challengeService;

    @GetMapping("/challenges")
    public ResponseEntity<List<Challenge>> getAllChallenges() {
        return ResponseEntity.ok().body(challengeService.getAllChallenges());
    }
}
