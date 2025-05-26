from app import db_connection
from model.entity_mappings import entity_mappings

from psycopg.rows import dict_row
from psycopg import sql
from typing import List, Tuple, Any
from json import dumps


def fetch_entity_relationships(entity_type: str, entity_id: int) -> List[Tuple[Any, ...]]:
    cur = db_connection.cursor(row_factory=dict_row)
    result_dict = {}

    for item in entity_mappings[entity_type]:
        query = sql.SQL(
            "SELECT * FROM {table} WHERE {id_field} = {id};").format(
                table=sql.Identifier(item["table_name"]),
                id_field=sql.Identifier(item["id_field"]),
                id=entity_id
            )
        query_results = cur.execute(query).fetchall()
        related_ids = [d[item["related_id"]] for d in query_results]
        result_dict[item["entity_name"]] = related_ids

    return result_dict