package com.gadomski.well_loom.controller;

import com.gadomski.well_loom.model.Challenge;
import com.gadomski.well_loom.service.ChallengeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/challenges")
public class ChallengeController extends CRUDController<Challenge> {
    public ChallengeController(ChallengeService service) {
        super(service);
    }
}
