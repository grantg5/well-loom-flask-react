package com.gadomski.well_loom.dao.area;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.gadomski.well_loom.model.Area;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

public class AreaRepositoryImpl implements AreaRepositoryCustom {

    private EntityManager entityManager;

    @PersistenceContext
    public void setEntityManager(EntityManager entityManager) {
    this.entityManager = entityManager;
    }

    public List<Area> findAllAreas(boolean includeRelations) {
        Session session = entityManager.unwrap(Session.class);

        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery<Area> cq = cb.createQuery(Area.class);
        Root<Area> areaRoot = cq.from(Area.class);

        // TODO: Always passing back joins regardless of includeRelations?...

        if (includeRelations) {
            areaRoot.join("practiceGroups");
            areaRoot.join("theories");
            areaRoot.join("challenges");
        }

        Query<Area> query = session.createQuery(cq);
        return query.getResultList();
    }
}