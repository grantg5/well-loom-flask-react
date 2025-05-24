from app import db_connection
from model.model import entity_mappings
from model.entity_schema_generator import schema_generator

from psycopg.rows import dict_row
from psycopg import sql
from typing import List, Tuple, Any
from json import dumps


# def is_valid_table_name(conn, table_name: str) -> bool:
#     with conn.cursor() as cur:
#         cur.execute("""
#             SELECT EXISTS (
#                 SELECT 1
#                 FROM information_schema.tables
#                 WHERE table_name = %s
#                 AND table_schema = 'public'
#             );
#         """, (table_name,))
#         return cur.fetchone()[0]


# def fetch_all(entity_type: str) -> List[Tuple[Any, ...]]:
#     cur = db_connection.cursor(row_factory=dict_row)

#     if not is_valid_table_name(db_connection, entity_type):
#         raise ValueError(f"Invalid or unauthorized table input: {entity_type}")

#     query = sql.SQL(
#         "SELECT * FROM {}").format(sql.Identifier(entity_type))
#     return cur.execute(query).fetchall()


def fetch_entity_relationships(entity_type: str, entity_id: int) -> List[Tuple[Any, ...]]:
    cur = db_connection.cursor(row_factory=dict_row)
    result_dict = {}

    for item in entity_mappings[entity_type]:
        print(item["table_name"] + ", " + item["id_field"])

        query = sql.SQL(
            "SELECT * FROM {table} WHERE {id_field} = {id};").format(
                table=sql.Identifier(item["table_name"]),
                id_field=sql.Identifier(item["id_field"]),
                id=entity_id
            )
        result_dict[item["entity_name"]] = cur.execute(query).fetchall()

    return result_dict