from app import db_connection
from psycopg.rows import dict_row
from psycopg import sql
from typing import List, Tuple, Any

def is_valid_table_name(conn, table_name: str) -> bool:
    with conn.cursor() as cur:
        cur.execute("""
            SELECT EXISTS (
                SELECT 1
                FROM information_schema.tables
                WHERE table_name = %s
                AND table_schema = 'public'
            );
        """, (table_name,))
        return cur.fetchone()[0]

def fetch_all(entity_type: str) -> List[Tuple[Any, ...]]:
    cur = db_connection.cursor(row_factory=dict_row)

    print(entity_type)

    if not is_valid_table_name(db_connection, entity_type):
        raise ValueError(f"Invalid or unauthorized table: {entity_type}")

    query = query = sql.SQL("SELECT * FROM {}").format(sql.Identifier(entity_type))
    return cur.execute(query).fetchall()