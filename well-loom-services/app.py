from psycopg import connect
from flask import Flask
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

import flask_config

db_connection = connect(
    host=flask_config.DB_IP,
    port=flask_config.DB_PORT,
    dbname=flask_config.DB_NAME,
    user=flask_config.DB_USERNAME,
    password=flask_config.DB_PASS
)

app = Flask(__name__)

import routes