package com.gadomski.well_loom.model;

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
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "theory")
public class Theory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "theory_name")
    private String theoryName;

    @Column(name = "theory_founder")
    private String theoryFounder;

    @Column(name = "theory_description")
    private String theoryDescription;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "created_by")
    private Long createdBy;

    @Column(name = "create_date_time")
    private LocalDateTime createDateTime;

    @Column(name = "updated_by")
    private Long updatedBy;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "area_theory_mapping", joinColumns = @JoinColumn(name = "theory_id"), inverseJoinColumns = @JoinColumn(name = "area_id"))
    private Set<Area> areas;

    public Set<Area> getAreas() {
        return areas;
    }

    public void setAreas(Set<Area> areas) {
        this.areas = areas;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTheoryName() {
        return theoryName;
    }

    public void setTheoryName(String theoryName) {
        this.theoryName = theoryName;
    }

    public String getTheoryFounder() {
        return theoryFounder;
    }

    public void setTheoryFounder(String theoryFounder) {
        this.theoryFounder = theoryFounder;
    }

    public String getTheoryDescription() {
        return theoryDescription;
    }

    public void setTheoryDescription(String theoryDescription) {
        this.theoryDescription = theoryDescription;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}