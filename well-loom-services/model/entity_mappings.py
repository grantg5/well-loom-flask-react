entity_mappings = {
    "areas": [
        {
            "entity_name": "practice_group",
            "table_name": "area_practice_group_mapping",
            "id_field": "area_id",
            "related_id": "practice_group_id"
        },
        {
            "entity_name": "challenge",
            "table_name": "area_challenge_mapping",
            "id_field": "area_id",
            "related_id": "challenge_id"
        }
    ],
    "practice_groups": [
        {
            "entity_name": "area",
            "table_name": "area_practice_group_mapping",
            "id_field": "practice_group_id",
            "related_id": "area_id"
        },
        {
            "entity_name": "challenge",
            "table_name": "practice_group_challenge_mapping",
            "id_field": "practice_group_id",
            "related_id": "challenge_id"
        },
        {
            "entity_name": "practice",
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_group_id",
            "related_id": "practice_id"
        }
    ],
    "practices": [
        {
            "entity_name": "practice_group",
            "table_name": "practice_group_practice_mapping",
            "id_field": "practice_id",
            "related_id": "practice_group_id"
        },
        {
            "entity_name": "resource",
            "table_name": "practice_resource_mapping",
            "id_field": "practice_id",
            "related_id": "resource_id"
        },
        {
            "entity_name": "challenge",
            "table_name": "practice_challenge_mapping",
            "id_field": "practice_id",
            "related_id": "challenge_id"
        }
    ],
    "challenges": [
        {
            "entity_name": "area",
            "table_name": "area_challenge_mapping",
            "id_field": "challenge_id",
            "related_id": "area_id"
        },
        {
            "entity_name": "practice_group",
            "table_name": "practice_group_challenge_mapping",
            "id_field": "challenge_id",
            "related_id": "practice_group_id"
        },
        {
            "entity_name": "practice",
            "table_name": "practice_challenge_mapping",
            "id_field": "challenge_id",
            "related_id": "practice_id"
        }
    ],
    "resources": [
        {
            "entity_name": "practice",
            "table_name": "practice_resource_mapping",
            "id_field": "resource_id",
            "related_id": "practice_id"
        }
    ]
}