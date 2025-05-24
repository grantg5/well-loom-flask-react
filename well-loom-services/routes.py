import controllers
from app import db_connection, app
from flask_smorest import Blueprint
from flask.views import MethodView
from model.entity_schemas import AreaSchema, PracticeGroupSchema, PracticeSchema, ResourceSchema, ChallengeSchema

from psycopg.rows import dict_row
from psycopg import sql

area_blp = Blueprint("areas", "areas", url_prefix="/areas", description="Operations on areas")
@area_blp.route("")
class AreaList(MethodView):
    @area_blp.response(200, AreaSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM area")
        return cur.execute(query).fetchall()
    
practice_group_blp = Blueprint("practice_groups", "practice_groups", url_prefix="/practice_groups", description="Operations on practice groups")
@practice_group_blp.route("")
class PracticeGroupList(MethodView):
    @practice_group_blp.response(200, PracticeGroupSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM practice_group")
        return cur.execute(query).fetchall()

practice_blp = Blueprint("practices", "practices", url_prefix="/practices", description="Operations on practices")
@practice_blp.route("")
class PracticeList(MethodView):
    @practice_blp.response(200, PracticeSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM practice")
        return cur.execute(query).fetchall()

resource_blp = Blueprint("resources", "resources", url_prefix="/resources", description="Operations on resources")
@resource_blp.route("")
class ResourceList(MethodView):
    @resource_blp.response(200, ResourceSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM resource")
        return cur.execute(query).fetchall()
    
challenge_blp = Blueprint("challenges", "challenges", url_prefix="/challenges", description="Operations on challenges")
@challenge_blp.route("")
class ChallengeList(MethodView):
    @challenge_blp.response(200, ChallengeSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM challenge")
        return cur.execute(query).fetchall()
    
@app.route('/<entity_type>/<entity_id>/relationships', methods=['GET'])
def fetch_entity_relationships(entity_type: str, entity_id: int):
    return controllers.fetch_entity_relationships(entity_type, entity_id)