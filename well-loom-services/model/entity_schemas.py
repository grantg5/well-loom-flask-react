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

class PracticeGroupSchema(Schema):
    id = fields.Int(dump_only=True)
    practice_group_name = fields.Str(required=True)
    practice_group_description = fields.Str(allow_none=True)
    practice_group_image = fields.Str(allow_none=True)
    is_active = fields.Bool(load_default=True)
    created_by = fields.Int(required=True)
    create_date_time = fields.DateTime(dump_only=True)
    updated_by = fields.Int(allow_none=True)
    update_date_time = fields.DateTime(dump_only=True)

class PracticeSchema(Schema):
    id = fields.Int(dump_only=True)
    practice_name = fields.Str(required=True)
    practice_short_description = fields.Str(allow_none=True)
    practice_long_description = fields.Str(allow_none=True)
    practice_image = fields.Str(allow_none=True)
    is_active = fields.Bool(load_default=True)
    created_by = fields.Int(required=True)
    create_date_time = fields.DateTime(dump_only=True)
    updated_by = fields.Int(allow_none=True)
    update_date_time = fields.DateTime(dump_only=True)

class ResourceSchema(Schema):
    id = fields.Int(dump_only=True)
    resource_name = fields.Str(required=True)
    resource_author = fields.Str(allow_none=True)
    resource_description = fields.Str(allow_none=True)
    resource_image = fields.Str(allow_none=True)
    resource_link = fields.Str(allow_none=True)
    is_active = fields.Bool(load_default=True)
    created_by = fields.Int(required=True)
    create_date_time = fields.DateTime(dump_only=True)
    updated_by = fields.Int(allow_none=True)
    update_date_time = fields.DateTime(dump_only=True)

class ChallengeSchema(Schema):
    id = fields.Int(dump_only=True)
    challenge_name = fields.Str(required=True)
    challenge_description = fields.Str(allow_none=True)
    is_active = fields.Bool(load_default=True)
    created_by = fields.Int(required=True)
    create_date_time = fields.DateTime(dump_only=True)
    updated_by = fields.Int(allow_none=True)
    update_date_time = fields.DateTime(dump_only=True)