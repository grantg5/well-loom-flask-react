package com.gadomski.well-better;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

@RestController
@RequestMapping("/api/practice")
public class PracticesController {
    @GetMapping("/get-practices")
    public String getPractices(@RequestHeader("pageNumber") int pageNumber,
            @RequestHeader("pageSize") int pageSize) {
        // TODO: import stuff, likely work w/ request body of type PracticeSearch for
        // searching
        // Then roll pagination when fetching from DB
        return "delete me";
    }
}