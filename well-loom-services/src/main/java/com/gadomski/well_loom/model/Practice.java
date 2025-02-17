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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "practice")
public class Practice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(Views.PlainEntity.class)
    private Long id;

    @Column(name = "practice_name")
    @JsonView(Views.PlainEntity.class)
    private String practiceName;

    @Column(name = "practice_short_description")
    @JsonView(Views.PlainEntity.class)
    private String practiceShortDescription;

    @Column(name = "practice_long_description")
    @JsonView(Views.PlainEntity.class)
    private String practiceLongDescription;

    @Column(name = "practice_image")
    @JsonView(Views.PlainEntity.class)
    private String practiceImage;

    @Column(name = "is_active")
    @JsonView(Views.PlainEntity.class)
    private Boolean isActive;

    @Column(name = "created_by")
    @JsonView(Views.PlainEntity.class)
    private Long createdBy;

    @Column(name = "create_date_time")
    @JsonView(Views.PlainEntity.class)
    private LocalDateTime createDateTime;

    @Column(name = "updated_by")
    @JsonView(Views.PlainEntity.class)
    private Long updatedBy;

    @Column(name = "update_date_time")
    @JsonView(Views.PlainEntity.class)
    private LocalDateTime updateDateTime;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "practice_challenge_mapping", joinColumns = @JoinColumn(name = "practice_id"), inverseJoinColumns = @JoinColumn(name = "challenge_id"))
    @JsonView(Views.EntityWithRelationships.class)
    private Set<Challenge> challenges;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonView(Views.EntityWithRelationships.class)
    @JoinTable(name = "practice_group_practice_mapping", joinColumns = @JoinColumn(name = "practice_id"), inverseJoinColumns = @JoinColumn(name = "practice_group_id"))
    // @JsonIgnore
    private Set<PracticeGroup> practiceGroups;

    // TODO: Add resources mapping

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPracticeName() {
        return practiceName;
    }

    public void setPracticeName(String practiceName) {
        this.practiceName = practiceName;
    }

    public String getPracticeShortDescription() {
        return practiceShortDescription;
    }

    public void setPracticeShortDescription(String practiceShortDescription) {
        this.practiceShortDescription = practiceShortDescription;
    }

    public String getPracticeLongDescription() {
        return practiceLongDescription;
    }

    public void setPracticeLongDescription(String practiceLongDescription) {
        this.practiceLongDescription = practiceLongDescription;
    }

    public String getPracticeImage() {
        return practiceImage;
    }

    public void setPracticeImage(String practiceImage) {
        this.practiceImage = practiceImage;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreateDateTime() {
        return createDateTime;
    }

    public void setCreateDateTime(LocalDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public Long getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(Long updatedBy) {
        this.updatedBy = updatedBy;
    }

    public LocalDateTime getUpdateDateTime() {
        return updateDateTime;
    }

    public void setUpdateDateTime(LocalDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
    }

    public Set<Challenge> getChallenges() {
        return challenges;
    }

    public void setChallenges(Set<Challenge> challenges) {
        this.challenges = challenges;
    }

    public Set<PracticeGroup> getPracticeGroups() {
        return practiceGroups;
    }

    public void setPracticeGroups(Set<PracticeGroup> practiceGroups) {
        this.practiceGroups = practiceGroups;
    }
}
