package com.gadomski.well_loom.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "practice")
public class Practice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "practice_name")
    private String practiceName;

    @Column(name = "practice_short_description")
    private String practiceShortDescription;

    @Column(name = "practice_long_description")
    private String practiceLongDescription;

    @Column(name = "practice_image")
    private String practiceImage;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "created_by")
    private User createdBy;

    @Column(name = "create_date_time")
    private LocalDateTime createDateTime;

    @Column(name = "updated_by")
    private User updatedBy;

    @Column(name = "update_date_time")
    private LocalDateTime updateDateTime;

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
}
