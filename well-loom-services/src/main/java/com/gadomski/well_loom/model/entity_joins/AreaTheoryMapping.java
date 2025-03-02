package com.gadomski.well_loom.model.entity_joins;

import com.fasterxml.jackson.annotation.JsonView;
import com.gadomski.well_loom.model.Area;
import com.gadomski.well_loom.model.Theory;
import com.gadomski.well_loom.model.Views;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "area_theory_mapping")
public class AreaTheoryMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(Views.PlainEntity.class)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "area_id")
    private Area area;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "theory_id")
    private Theory theory;

    @Column(name = "is_active")
    private boolean isActive;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Theory getTheory() {
        return theory;
    }

    public void setTheory(Theory theory) {
        this.theory = theory;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }
}