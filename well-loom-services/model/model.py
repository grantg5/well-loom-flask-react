import datetime

entity_spec = {
    "Area": {
        "id": int,
        "area_name": str,
        "area_description": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    },
    "Theory": {
        "id": int,
        "theory_name": str,
        "theory_founder": str,
        "theory_description": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    },
    "Practice_Group": {
        "id": int,
        "practice_group_name": str,
        "practice_group_description": str,
        "practice_group_image": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    },
    "Practice": {
        "id": int,
        "practice_name": str,
        "practice_short_description": str,
        "practice_long_description": str,
        "practice_image": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    },
    "Resource": {
        "id": int,
        "resource_name": str,
        "resource_author": str,
        "resource_description": str,
        "resource_image": str,
        "resource_link": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    },
    "Challenge": {
        "id": int,
        "challenge_name": str,
        "challenge_description": str,
        "is_active": bool,
        "created_by": int,
        "create_date_time": datetime.datetime,
        "updated_by": int,
        "update_date_time": datetime.datetime
    }
}

entity_mappings = {
    "Area": [
        {
            "entity_name": "Theory",
            "table_name": "Area_Theory_Mapping",
            "id_field": "area_id"
        },
        {
            "entity_name": "Practice_Group",
            "table_name": "Area_Practice_Group_Mapping",
            "id_field": "area_id"
        },
        {
            "entity_name": "Challenge",
            "table_name": "Area_Challenge_Mapping",
            "id_field": "area_id"
        }
    ],
    "Theory": [
        {
            "entity_name": "Challenge",
            "table_name": "Area_Theory_Mapping",
            "id_field": "theory_id"
        },
        {
            "entity_name": "Resource",
            "table_name": "Theory_Resource_Mapping",
            "id_field": "theory_id"
        }
    ],
    "Practice_Group": [
        {
            "entity_name": "Area",
            "table_name": "Area_Practice_Group_Mapping",
            "id_field": "practice_group_id"
        },
        {
            "entity_name": "Practice",
            "table_name": "Practice_Group_Practice_Mapping",
            "id_field": "practice_group_id"
        }
    ],
    "Practice": [
        {
            "entity_name": "Practice_Group",
            "table_name": "Practice_Group_Practice_Mapping",
            "id_field": "practice_id"
        },
        {
            "entity_name": "Resource",
            "table_name": "Practice_Resource_Mapping",
            "id_field": "practice_id"
        },
        {
            "entity_name": "Challenge",
            "table_name": "Practice_Challenge_Mapping",
            "id_field": "practice_id"
        }
    ],
    "Challenge": [
        {
            "entity_name": "Area",
            "table_name": "Area_Challenge_Mapping",
            "id_field": "challenge_id"
        },
        {
            "entity_name": "Practice",
            "table_name": "Practice_Challenge_Mapping",
            "id_field": "challenge_id"
        }
    ],
}