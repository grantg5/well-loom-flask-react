from __init__ import db_connection
from typing import List, Tuple, Any

def fetch_all(entity_type: str) -> List[Tuple[Any, ...]]:
    cur = db_connection.cursor()

    query = "SELECT * FROM %s;"
    cur.execute(query, entity_type)
    return cur.fetchall()