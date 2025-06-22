# Practice Associated
| area      | Broad categorization of well-being practices. Sky, sail, hull |
| ----------- | ----------- |
| id      | Primary key       |
| area_name   | Text  (Unique)       |
| area_description      | Text      |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| well_being_component      | Area of the boat, grouping of practices |
| ----------- | ----------- |
| id      | Primary key       |
| component_name   | Text  (Unique)       |
| component_description   | Text       |
| component_image   | Text       |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| area_well_being_component_mapping  | Many-to-many relationship between area and well_being_component |
| ------------------- | ------------------------------------------------------- |
| id                  | Primary key                                            |
| area_id             | Foreign key (area.id)                                  |
| well_being_component_id   | Foreign key (well_being_component.id)                        |
| is_active           | Boolean                                                |
| created_by          | user(id)                                               |
| create_date_time    | Datetime                                               |
| updated_by          | user(id)                                               |
| update_date_time    | Datetime                                               |


| practice      | Practice that can help someone improve their well being |
| ----------- | ----------- |
| id      | Primary key       |
| practice_name   | Text  (Unique)       |
| practice_short_description   | Text       |
| practice_long_description   | Text       |
| practice_image   | Text       |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| well_being_component_practice_mapping  | Many-to-many relationship between well_being_component and practice |
| ----------------------- | ----------------------------------------------------------- |
| id                      | Primary key                                                |
| well_being_component_id       | Foreign key (well_being_component.id)                            |
| practice_id             | Foreign key (practice.id)                                  |
| is_active               | Boolean                                                    |
| created_by              | user(id)                                                   |
| create_date_time        | Datetime                                                   |
| updated_by              | user(id)                                                   |
| update_date_time        | Datetime                                                   |


| resource      | Resource associated with a practice or theory that allows users to learn more |
| ----------- | ----------- |
| id      | Primary key       |
| resource_name   | Text  (Unique)       |
| resource_author   | Text      |
| resource_description   | Text       |
| resource_image   | Text       |
| resource_link   | Text       |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| practice_resource_mapping  | Many-to-many relationship between practice and resource |
| ----------------- | ------------------------------------------------------ |
| id                | Primary key                                           |
| practice_id       | Foreign key (practice.id)                             |
| resource_id      | Foreign key (resource.id)                             |
| is_active         | Boolean                                               |
| created_by        | user(id)                                              |
| create_date_time  | Datetime                                              |
| updated_by        | user(id)                                              |
| update_date_time  | Datetime                                              |

# User Associated
NOTE: Will compile from https://docs.google.com/document/d/1Mo0cguLlhVtyfLPmjs34fU7aRJls58sMwlZ2B8Akl1I/edit?tab=t.0 when needed