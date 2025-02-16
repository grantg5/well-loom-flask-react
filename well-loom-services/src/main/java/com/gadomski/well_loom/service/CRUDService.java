package com.gadomski.well_loom.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public abstract class CRUDService<T, ID> {
    private final JpaRepository<T, ID> repo;

    public CRUDService(JpaRepository<T, ID> repo) {
        this.repo = repo;
    }

    public List<T> getAll() {
        return repo.findAll();
    }
}
