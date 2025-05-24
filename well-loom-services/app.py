from psycopg import connect
from flask import Flask
from flask_smorest import Api

import flask_config
db_connection = connect(
    host=flask_config.DB_IP,
    port=flask_config.DB_PORT,
    dbname=flask_config.DB_NAME,
    user=flask_config.DB_USERNAME,
    password=flask_config.DB_PASS
)

from model.blueprints import area_blp
app = Flask(__name__)
app.config["API_TITLE"] = "Well Loom Services"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.1.0"
app.config['OPENAPI_URL_PREFIX'] = '/docs'
app.config['OPENAPI_SWAGGER_UI_PATH'] = '/ui'
app.config['OPENAPI_SWAGGER_UI_URL'] = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'

api = Api(app)
api.register_blueprint(area_blp)