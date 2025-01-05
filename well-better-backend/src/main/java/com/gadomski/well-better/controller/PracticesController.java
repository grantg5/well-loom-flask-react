package com.gadomski.well-better;

@RestController
@RequestMapping("/api/practice")
public class PracticesController {
    @GetMapping("/get-practices")
    public String getPractices(@RequestHeader("pageNumber") int pageNumber, 
                               @RequestHeader("pageSize") int pageSize) {
        // TODO: Fix formatting for arguements, import stuff, consider search params to
        // possibly import (probs via a request body)
    }
}