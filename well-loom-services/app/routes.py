from run import app
import controllers

@app.route('/<entity_type>', methods=['GET'])
def fetch_all_entities(entity_type: str):
    # TODO: Format for return. Also see if there's a way for psycopg to return dictionaries instead of tuples
    return controllers.fetch_all(entity_type)
 
# Note: will likely want /<entity_type>/<entity_id> as seperate route definition for fetching single entity