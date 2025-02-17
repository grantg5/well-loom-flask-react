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
@Table(name = "practice_group")
public class PracticeGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "practice_group_name")
    private String practiceGroupName;

    @Column(name = "practice_group_description")
    private String practiceGroupDescription;

    @Column(name = "practice_group_image")
    private String practiceGroupImage;

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
    @JoinTable(name = "area_practice_group_mapping", joinColumns = @JoinColumn(name = "practice_group_id"), inverseJoinColumns = @JoinColumn(name = "area_id"))
    private Set<Area> areas;

    @ManyToMany(mappedBy = "practiceGroups")
    private Set<Practice> practices;

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

    public String getPracticeGroupName() {
        return practiceGroupName;
    }

    public void setPracticeGroupName(String practiceGroupName) {
        this.practiceGroupName = practiceGroupName;
    }

    public String getPracticeGroupDescription() {
        return practiceGroupDescription;
    }

    public void setPracticeGroupDescription(String practiceGroupDescription) {
        this.practiceGroupDescription = practiceGroupDescription;
    }

    public String getPracticeGroupImage() {
        return practiceGroupImage;
    }

    public void setPracticeGroupImage(String practiceGroupImage) {
        this.practiceGroupImage = practiceGroupImage;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}
