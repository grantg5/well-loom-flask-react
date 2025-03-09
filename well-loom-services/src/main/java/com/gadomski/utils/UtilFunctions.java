package com.gadomski.utils;

import java.util.Map;

public final class UtilFunctions {
    private UtilFunctions() {}

    public static Map<String, Object> getMappingEntity (String entity1, String entity2) {
        // Note: for class can return MappingClassName.class
        // Query new mapping directory table w/ entities
        // To query based on ids, sort entities coming in alphabetically. Strip all special characters & to-lower. Append id to the end.
        // Ex. column_1 = areaid, column_2 = practicegroupid
    }
}
