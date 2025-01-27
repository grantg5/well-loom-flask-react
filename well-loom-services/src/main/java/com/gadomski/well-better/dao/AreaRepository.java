package com.gadomski.well_loom;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long> {
    @Query("SELECT * FROM area WHERE is_active = true")
    List<Area> findAllAreas();
}