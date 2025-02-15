package com.gadomski.well_loom.dto;

import com.gadomski.well_loom.model.Area;

public class AreaDTO {
    private long id;
    private String areaName;
    private String areaDescription;
    private boolean isActive;

    public AreaDTO(Area area) {
        this.id = area.getId();
        this.areaName = area.getAreaName();
        this.areaDescription = area.getAreaDescription();
        this.isActive = area.getIsActive();
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
