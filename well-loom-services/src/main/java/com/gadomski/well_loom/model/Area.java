package com.gadomski.well_loom.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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

    @ManyToMany(mappedBy = "areas")
    private Set<Theory> theories;

    @ManyToMany(mappedBy = "areas")
    private Set<PracticeGroup> practiceGroups;

    @ManyToMany(mappedBy = "areas")
    private Set<Challenge> challenges;

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

    public Set<PracticeGroup> getPracticeGroups() {
        return practiceGroups;
    }

    public Set<Theory> getTheories() {
        return theories;
    }
    
    public Set<Challenge> getChallenges() {
        return challenges;
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

    public void setPracticeGroups(Set<PracticeGroup> practiceGroups) {
        this.practiceGroups = practiceGroups;
    }

    public void setTheories(Set<Theory> theories) {
        this.theories = theories;
    }

    public void setChallenges(Set<Challenge> challenges) {
        this.challenges = challenges;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }
}