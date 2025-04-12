from flask import Flask
from psycopg2 import connect
from string import Template
from config import DB_URL, DB_USERNAME, DB_PASS

db_connection = connect(Template('dbname=$name user=$user password=$password').substitute(name=DB_URL, user=DB_USERNAME, password=DB_PASS))

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    return app