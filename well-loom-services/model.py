mapping_tables = {
    "area": [
        {
            "entity_name": "theory",
            "table_name": "area_theory_mapping",
            "id_field": "area_id"
        },
        {
            "entity_name": "practice_group",
            "table_name": "area_practice_group_mapping",
            "id_field": "area_id"
        },
        {
            "entity_name": "challenge",
            "table_name": "area_challenge_mapping",
            "id_field": "area_id"
        }
    ],
    "theory": [
        {
            "entity_name": "challenge",
            "table_name": "area_theory_mapping",
            "id_field": "theory_id"
        },
        {
            "entity_name": "resource",
            "table_name": "theory_resource_mapping",
            "id_field": "theory_id"
        }
    ],
    "practice_group": [
        {
            "entity_name": "area",
            "table_name": "area_practice_group_mapping",
            "id_field": "practice_group_id"
        },
        {
            "entity_name": "practice",
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_group_id"
        }
    ],
    "practice": [
        {
            "entity_name": "practice_group",
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_id"
        },
        {
            "entity_name": "resource",
            "table_name": "practice_resource_mapping",
            "id_field": "practice_id"
        },
        {
            "entity_name": "challenge",
            "table_name": "practice_challenge_mapping",
            "id_field": "practice_id"
        }
    ],
    "challenge": [
        {
            "entity_name": "area",
            "table_name": "area_challenge_mapping",
            "id_field": "challenge_id"
        },
        {
            "entity_name": "practice",
            "table_name": "practice_challenge_mapping",
            "id_field": "challenge_id"
        }
    ],
}