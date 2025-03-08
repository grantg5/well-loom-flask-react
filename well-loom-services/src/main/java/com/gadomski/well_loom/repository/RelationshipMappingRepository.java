package com.gadomski.well_loom.repository;

import java.util.List;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.Param;

@NoRepositoryBean
public interface RelationshipMappingRepository<T, Long> {
    List<T> getRelatedEntities(
        @Param("mappingEntity") Class<T> mappingEntity,
        @Param("entity1MappingField") String entity1MappingField,
        @Param("entity2MappingField") String entity2MappingField,
        @Param("entity1Id") int entity1Id,
        @Param("entity2Id") int entity2Id
    );
}