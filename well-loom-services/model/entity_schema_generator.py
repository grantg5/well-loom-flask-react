import datetime
from model.model import entity_spec
import json

json_types = {
    int: "int",
    str: "string",
    bool: "boolean",
    datetime.datetime: "datetime"
}

def schema_generator():
    return {
        entity: {
            field: json_types.get(py_type, "any")
            for field, py_type in fields.items()
        }
        for entity, fields in entity_spec.items()
    }