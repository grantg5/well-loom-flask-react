from app import app
import controllers

#Note: entity_type param has to be singular, uppercase
@app.route('/<entity_type>', methods=['GET'])
def fetch_all_entities(entity_type: str):
    return controllers.fetch_all(entity_type)

@app.route('/<entity_type>/<entity_id>/relationships', methods=['GET'])
def fetch_entity_relationships(entity_type: str, entity_id: int):
    return controllers.fetch_entity_relationships(entity_type, entity_id)

@app.route('/entity-schema', methods=['GET'])
def fetch_entity_schema():
    return controllers.fetch_entity_schema()