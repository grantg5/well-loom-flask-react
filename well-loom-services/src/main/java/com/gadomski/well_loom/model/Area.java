package com.gadomski.well_loom.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "area")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "area_name")
    private String areaName;

    @Column(name = "area_description")
    private String areaDescription;

    @Column(name = "is_active")
    private boolean isActive;

    public Area() {
    }

    // Getters
    public long getId() {
        return id;
    }

    public String getAreaName() {
        return areaName;
    }

    public String getAreaDescription() {
        return areaDescription;
    }

    public boolean getIsActive() {
        return isActive;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public void setAreaDescription(String areaDescription) {
        this.areaDescription = areaDescription;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}