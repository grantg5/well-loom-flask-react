| well_loom_user      | Main user table, authentication is done through Google |
| ----------- | ----------- |
| id      | Primary key       |
| email   | Text (Unique)        |
| is_active      | Boolean       |
| create_date_time   | Datetime        |
| update_date_time   | Datetime        |

| reference_lookup      | Contains text constants used throughout front-end of app |
| ----------- | ----------- |
| id      | Primary key       |
| ref_type   | Text       |
| ref_value      | Text      |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |

| well_being_category      | Broad categorization of well-being practices |
| ----------- | ----------- |
| id      | Primary key       |
| category_name   | Text  (Unique)       |
| category_description      | Text      |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |

| practice      | Practice that can help people improve their overall well-being |
| ----------- | ----------- |
| id      | Primary key       |
| practice_name   | Text (Unique)       |
| source      | reference_lookup(id)      |
| practice_description   | Text        |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |

| category_practice_mapping      | Maps practices to associated categories (facilitating many-many relationship) |
| ----------- | ----------- |
| id      | Primary key       |
| category_id   | well_being_category(id)        |
| practice_id   | practice(id)        |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |

| practice_resource      | Resource that can help people learn & utilize practices |
| ----------- | ----------- |
| id      | Primary key       |
| resource_name   | Text (Unique)      |
| resource_type   | reference_lookup(id)        |
| resource_description   | Text       |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |

| practice_resource_mapping      | Maps resources to the practices they can help with, facilitating many-many relationships |
| ----------- | ----------- |
| id      | Primary key       |
| practice_id   | well_being_category(id)        |
| resource_id   | practice(id)        |
| is_active      | Boolean       |
| created_by   | well_loom_user(id)        |
| create_date_time   | Datetime        |
| updated_by   | well_loom_user(id)         |
| update_date_time   | Datetime        |