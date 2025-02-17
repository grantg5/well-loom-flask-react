package com.gadomski.well_loom.model;

import com.fasterxml.jackson.annotation.JsonView;

public class Views {
    public static class PlainEntity {}
    public static class EntityWithRelationships extends PlainEntity {}
}
