import java.time.LocalDateTime;

@Entity
@Table(name = "area")
public class Area {
    @Id

    private int id;
    private String areaName;
    private String areaDescription;
    private boolean isActive;
    private int createdBy;
    private LocalDateTime createDateTime;
    private int updatedBy;
    private LocalDateTime updateDateTime;

    // Getters
    public int getId() {
        return id;
    }

    public String getAreaName() {
        return areaName;
    }

    public String getAreaDescription() {
        return areaDescription;
    }

    public boolean isActive() {
        return isActive;
    }

    public int getCreatedBy() {
        return createdBy;
    }

    public LocalDateTime getCreateDateTime() {
        return createDateTime;
    }

    public int getUpdatedBy() {
        return updatedBy;
    }

    public LocalDateTime getUpdateDateTime() {
        return updateDateTime;
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

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public void setCreatedBy(int createdBy) {
        this.createdBy = createdBy;
    }

    public void setCreateDateTime(LocalDateTime createDateTime) {
        this.createDateTime = createDateTime;
    }

    public void setUpdatedBy(int updatedBy) {
        this.updatedBy = updatedBy;
    }

    public void setUpdateDateTime(LocalDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
    }
}