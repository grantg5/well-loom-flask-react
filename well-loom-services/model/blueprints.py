from app import db_connection
from flask_smorest import Blueprint
from flask.views import MethodView
from .schemas import AreaSchema

from psycopg.rows import dict_row
from psycopg import sql

area_blp = Blueprint("areas", "areas", url_prefix="/areas", description="Operations on areas")

@area_blp.route("")
class AreaList(MethodView):
    @area_blp.response(200, AreaSchema(many=True))
    def get(self):
        cur = db_connection.cursor(row_factory=dict_row)
        query = sql.SQL("SELECT * FROM Area")
        return cur.execute(query).fetchall()