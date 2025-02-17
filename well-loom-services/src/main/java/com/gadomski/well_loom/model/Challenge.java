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
@Table(name = "challenge")
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "challenge_name")
    private String challengeName;

    @Column(name = "challenge_description")
    private String challengeDescription;

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
    @JoinTable(name = "area_challenge_mapping", joinColumns = @JoinColumn(name = "challenge_id"), inverseJoinColumns = @JoinColumn(name = "area_id"))
    private Set<Area> areas;

    @ManyToMany(mappedBy = "challenges")
    private Set<Practice> practices;

    public Set<Area> getAreas() {
        return areas;
    }

    public void setAreas(Set<Area> areas) {
        this.areas = areas;
    }

    public Set<Practice> getPractices() {
        return practices;
    }

    public void setPractices(Set<Practice> practices) {
        this.practices = practices;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getChallengeName() {
        return challengeName;
    }

    public void setChallengeName(String challengeName) {
        this.challengeName = challengeName;
    }

    public String getChallengeDescription() {
        return challengeDescription;
    }

    public void setChallengeDescription(String challengeDescription) {
        this.challengeDescription = challengeDescription;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
}
