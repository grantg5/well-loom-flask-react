from marshmallow import Schema, fields

class AreaSchema(Schema):
    id = fields.Int(dump_only=True)
    area_name = fields.Str(required=True)
    area_description = fields.Str(allow_none=True)
    is_active = fields.Bool(load_default=True)
    created_by = fields.Int(required=True)
    create_date_time = fields.DateTime(dump_only=True)
    updated_by = fields.Int(allow_none=True)
    update_date_time = fields.DateTime(dump_only=True)