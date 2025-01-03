-- Table creation
CREATE TABLE well_better_user (
  id BIGSERIAL PRIMARY KEY,
  email text unique,
  is_active boolean,
  create_date_time timestamp,
  update_date_time timestamp
);

CREATE TABLE reference_lookup (
  id BIGSERIAL PRIMARY KEY,
  ref_type text,
  ref_value text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp,
  UNIQUE (ref_type, ref_value)
);

CREATE TABLE well_being_category (
  id BIGSERIAL PRIMARY KEY,
  category_name text unique,
  category_description text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
);

CREATE TABLE practice (
  id BIGSERIAL PRIMARY KEY,
  practice_name text unique,
  source bigint references reference_lookup(id),
  practice_description text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
);

CREATE TABLE category_practice_mapping (
  id BIGSERIAL PRIMARY KEY,
  category_id bigint references well_being_category(id),
  practice_id bigint references practice(id),
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp,
  UNIQUE (category_id, practice_id)
);

CREATE TABLE practice_resource (
  id BIGSERIAL PRIMARY KEY,
  resource_name text unique,
  resource_type bigint references reference_lookup(id),
  resource_description text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
);

CREATE TABLE practice_resource_mapping (
  id BIGSERIAL PRIMARY KEY,
  practice_id bigint references practice(id),
  resource_id bigint references practice_resource(id),
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp,
  UNIQUE (practice_id, resource_id)
);

-- Create datetime function
CREATE FUNCTION set_create_date_time() RETURNS TRIGGER AS $set_create_date_time$
  BEGIN
    NEW.create_date_time:= current_timestamp;
    RETURN NEW;
  END;
$set_create_date_time$ LANGUAGE plpgsql;

-- Update datetime function
CREATE FUNCTION set_update_date_time() RETURNS TRIGGER AS $set_update_date_time$
  BEGIN
    NEW.update_date_time:= current_timestamp;
    RETURN NEW;
  END;
$set_update_date_time$ LANGUAGE plpgsql;

DO $apply_create_date_time_triggers$
DECLARE
  target_table_name text;
  create_trigger_statement text;
  update_trigger_statement text;
BEGIN
  FOR target_table_name IN
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
  LOOP
    create_trigger_statement := format(
      'CREATE TRIGGER set_create_date_time BEFORE INSERT ON %I FOR EACH ROW EXECUTE PROCEDURE set_create_date_time();',
      target_table_name
    );
    update_trigger_statement := format(
      'CREATE TRIGGER set_update_date_time BEFORE UPDATE ON %I FOR EACH ROW EXECUTE PROCEDURE set_update_date_time();',
      target_table_name
    );

    EXECUTE create_trigger_statement;
    EXECUTE update_trigger_statement;
  END LOOP;
END;
$apply_create_date_time_triggers$;

-- Initial inserts
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Buddhism', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Jungian Psychology', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Internal Family Systems', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Plant Medicine', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Cognitive Therapy', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Aerobic Exercise', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Nutritional Sciences', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Strength-based Exercises', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('practice_source', 'Flexibility', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('resource_type', 'Mobile App', true);
INSERT INTO reference_lookup (ref_type, ref_value, is_active) VALUES ('resource_type', 'Book', true);

INSERT INTO well_being_category (category_name, category_description, is_active) VALUES ('Spiritual', 'Connection to what exists beyond the self', true);
INSERT INTO well_being_category (category_name, category_description, is_active) VALUES ('Therapeutic', 'Healing past traumas, wounds, discovering, and living more as your true self', true);
INSERT INTO well_being_category (category_name, category_description, is_active) VALUES ('Physical', 'Improving vitality, capacity, longevity, and overall sense of physical well-being', true);

INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('TM-style Meditation', 1, 'Meditating using a mantra method. Popularized in the west by Transcendental Meditation. Vedic meditation, or the use of the free app 1 Giant Mind also fits the bill.', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Parts Work', 3, 'Unblending from, gaining the trust of protectors, and eventually healing exiles', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Therapeutic mushroom trip', 4, 'Leveraging a significant psychoblin dose for spiritual discoveries', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Therapeutic MDMA trip', 4, 'Leveraging MDMA to heal past trauma, wounds, and build love for oneself & others', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Running', 6, 'Building aerobic & leg muscles through regular running', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Climbing', 8, 'Building muscles (and having fun) through regular climbing', true);
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Increasing plants in diet', 7, 'Improving overall sense of physical well-being through more plants (fruits & vegitables) in diet', true);   
INSERT INTO practice (practice_name, source, practice_description, is_active)
  VALUES ('Reducing alcohol', 7, 'Improving overall sense of physical well-being through reducing drinks per week', true);

INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (1, 1, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (2, 2, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (1, 3, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (2, 4, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (3, 5, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (3, 6, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (3, 7, true);
INSERT INTO category_practice_mapping (category_id, practice_id, is_active) VALUES (3, 8, true);

INSERT INTO practice_resource (resource_name, resource_type, resource_description, is_active) VALUES ('One Giant Mind', 10, 'Free app that teaches a mantra-based meditation similar to transcendental meditation', true);
INSERT INTO practice_resource (resource_name, resource_type, resource_description, is_active) VALUES ('Self Therapy', 11, 'Book by Jay Earley on the Internal Family Systems method of therapy', true);

INSERT INTO practice_resource_mapping (practice_id, resource_id, is_active) VALUES (1, 1, true);
INSERT INTO practice_resource_mapping (practice_id, resource_id, is_active) VALUES (2, 2, true);