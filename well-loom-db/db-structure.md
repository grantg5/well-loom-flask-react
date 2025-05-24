# Practice Associated
| area      | Broad categorization of well-being practices. Spiritual, mental, physical |
| ----------- | ----------- |
| id      | Primary key       |
| area_name   | Text  (Unique)       |
| area_description      | Text      |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| practice_group      | Grouping of practices |
| ----------- | ----------- |
| id      | Primary key       |
| practice_group_name   | Text  (Unique)       |
| practice_group_description   | Text       |
| practice_group_image   | Text       |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| area_practice_group_mapping  | Many-to-many relationship between area and practice_group |
| ------------------- | ------------------------------------------------------- |
| id                  | Primary key                                            |
| area_id             | Foreign key (area.id)                                  |
| practice_group_id   | Foreign key (practice_group.id)                        |
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

| practice_group_practice_mapping  | Many-to-many relationship between practice_group and practice |
| ----------------------- | ----------------------------------------------------------- |
| id                      | Primary key                                                |
| practice_group_id       | Foreign key (practice_group.id)                            |
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

| challenge      | Something that a person can suffer from, which reduces their well being |
| ----------- | ----------- |
| id      | Primary key       |
| challenge_name   | Text  (Unique)       |
| challenge description   | Text      |
| is_active      | Boolean       |
| created_by   | user(id)        |
| create_date_time   | Datetime        |
| updated_by   | user(id)         |
| update_date_time   | Datetime        |

| area_challenge_mapping   | Many-to-many relationship between area and challenge |
| ------------- | -------------------------------------------------- |
| id            | Primary key                                       |
| area_id       | Foreign key (area.id)                             |
| challenge_id    | Foreign key (challenge.id)                          |
| is_active     | Boolean                                           |
| created_by    | user(id)                                          |
| create_date_time | Datetime                                        |
| updated_by    | user(id)                                          |
| update_date_time | Datetime                                        |

| practice_challenge_mapping  | Many-to-many relationship between practice and challenge |
| ---------------- | ----------------------------------------------------- |
| id               | Primary key                                          |
| practice_id      | Foreign key (practice.id)                            |
| challenge_id       | Foreign key (challenge.id)                             |
| is_active        | Boolean                                              |
| created_by       | user(id)                                             |
| create_date_time | Datetime                                             |
| updated_by       | user(id)                                             |
| update_date_time | Datetime                                             |

# User Associated
NOTE: Will compile from https://docs.google.com/document/d/1Mo0cguLlhVtyfLPmjs34fU7aRJls58sMwlZ2B8Akl1I/edit?tab=t.0 when needed