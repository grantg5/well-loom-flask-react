package com.gadomski.well_loom.repository;

import java.util.List;

import org.springframework.data.repository.query.Param;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

public class HibernateRelationshipMappingRepository<T, Long> implements RelationshipMappingRepository<T, Long> {

    @PersistenceContext
    private EntityManager entityManager;

    public List<T> getRelatedEntities(
        @Param("mappingEntity") Class<T> mappingEntity,
        @Param("entity1MappingField") String entity1MappingField,
        @Param("entity2MappingField") String entity2MappingField,
        @Param("entity1Id") int entity1Id,
        @Param("entity2Id") int entity2Id
    ) {
        String queryString = "SELECT e FROM" + mappingEntity.getSimpleName() + "e WHERE e." + entity1MappingField + " = :entity1Id";

        if (entity2Id != 0) {
            queryString += (" AND " + entity2MappingField + " = :entity2Id");
        }
        
        TypedQuery<T> query = entityManager.createQuery(queryString, mappingEntity);
        query.setParameter("entity1Id", entity1Id);
        if (entity2Id != 0) {
            query.setParameter("entity2Id", entity2Id);
        }

        return query.getResultList();
    }
}
