mapping_tables = {
    "area": [
        {
            "table_name": "area_theory_mapping",
            "id_field": "area_id"
        },
        {
            "table_name": "area_practice_group_mapping",
            "id_field": "area_id"
        },
        {
            "table_name": "area_challenge_mapping",
            "id_field": "area_id"
        }
    ],
    "theory": [
        {
            "table_name": "area_theory_mapping",
            "id_field": "theory_id"
        },
        {
            "table_name": "theory_resource_mapping",
            "id_field": "theory_id"
        }
    ],
    "practice_group": [
        {
            "table_name": "area_practice_group_mapping",
            "id_field": "practice_group_id"
        },
        {
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_group_id"
        }
    ],
    "practice": [
        {
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_id"
        },
        {
            "table_name": "practice_resource_mapping",
            "id_field": "practice_id"
        },
        {
            "table_name": "practice_challenge_mapping",
            "id_field": "practice_id"
        }
    ],
    "challenge": [
        {
            "table_name": "area_challenge_mapping",
            "id_field": "challenge_id"
        },
        {
            "table_name": "practice_challenge_mapping",
            "id_field": "challenge_id"
        }
    ],
}