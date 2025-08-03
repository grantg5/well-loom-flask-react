from flask import Flask
from flask_smorest import Api
from flask_cors import CORS

app = Flask(__name__)
app.config["API_TITLE"] = "Well Loom Services"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.1.0"
app.config['OPENAPI_URL_PREFIX'] = '/docs'
app.config['OPENAPI_SWAGGER_UI_PATH'] = '/ui'
app.config['OPENAPI_SWAGGER_UI_URL'] = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'

from wl_routes import db_connection, area_blp, well_being_component_blp, practice_blp, resource_blp
import controllers

frontend_url = "https://glorious-orbit-7gpx69jxq2px55-5173.app.github.dev/"
CORS(app, 
     origins=[frontend_url],
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET"])

api = Api(app)
api.register_blueprint(area_blp)
api.register_blueprint(well_being_component_blp)
api.register_blueprint(practice_blp)
api.register_blueprint(resource_blp)

@app.route('/<entity_type>/<entity_id>/relationships', methods=['GET'])
def fetch_entity_relationships(entity_type: str, entity_id: int):
    return controllers.fetch_entity_relationships(entity_type, entity_id)
