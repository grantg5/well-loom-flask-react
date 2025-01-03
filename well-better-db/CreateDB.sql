-- Table creation
CREATE TABLE well_better_user (
  id BIGSERIAL PRIMARY KEY,
  email text,
  is_active boolean,
  create_date_time timestamp,
  update_date_time timestamp
);

CREATE TABLE reference_lookup (
  id BIGSERIAL PRIMARY KEY,
  category text,
  ref_value text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
);

CREATE TABLE practice (
  id BIGSERIAL PRIMARY KEY,
  practice_name text,
  category bigint references reference_lookup(id),
  source bigint references reference_lookup(id),
  practice_description text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
);

CREATE TABLE practice_resource (
  id BIGSERIAL PRIMARY KEY,
  practice_id bigint references practice(id),
  resource_name text,
  resource_type bigint references reference_lookup(id),
  resource_description text,
  is_active boolean,
  created_by bigint references well_better_user(id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(id),
  update_date_time timestamp
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
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_category', 'Spiritual', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_category', 'Therapeutic', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_category', 'Physical', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Buddhism', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Jungian Psychology', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Internal Family Systems', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Plant Medicine', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Cognitive Therapy', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Aerobic Exercise', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Nutritional Sciences', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Strength-based Exercises', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('practice_source', 'Flexibility', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('resource_type', 'Mobile App', true) ON CONFLICT (ref_value) DO NOTHING;
INSERT INTO reference_lookup (category, ref_value, is_active) VALUES ('resource_type', 'Book', true) ON CONFLICT (ref_value) DO NOTHING;

INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('TM-style Meditation', 1, 4, 'Meditating using a mantra method. Popularized in the west by Transcendental Meditation. Vedic meditation, or the use of the free app 1 Giant Mind also fits the bill.', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Parts Work', 2, 5, 'Unblending from, gaining the trust of protectors, and eventually healing exiles', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Therapeutic mushroom trip', 1, 7, 'Leveraging a significant psychoblin dose for spiritual discoveries', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Therapeutic MDMA trip', 2, 7, 'Leveraging MDMA to heal past trauma, wounds, and build love for oneself & others', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Running', 3, 9, 'Building aerobic & leg muscles through regular running', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Climbing', 3, 11, 'Building muscles (and having fun) through regular climbing', true) ON CONFLICT (practice_name) DO NOTHING;
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Increasing plants in diet', 3, 10, 'Improving overall sense of physical well-being through more plants (fruits & vegitables) in diet', true) ON CONFLICT (practice_name) DO NOTHING;   
INSERT INTO practice (practice_name, category, source, practice_description, is_active)
  VALUES ('Reducing alcohol', 3, 10, 'Improving overall sense of physical well-being through reducing drinks per week', true) ON CONFLICT (practice_name) DO NOTHING;

INSERT INTO practice_resource (practice_id, resource_name, resource_type, resource_description, is_active) VALUES (1, 'One Giant Mind', 13, 'Free app that teaches a mantra-based meditation similar to transcendental meditation', true) ON CONFLICT (resource_name) DO NOTHING;
INSERT INTO practice_resource (practice_id, resource_name, resource_type, resource_description, is_active) VALUES (1, 'Self Therapy', 13, 'Book by Jay Earley on the Internal Family Systems method of therapy', true) ON CONFLICT (resource_name) DO NOTHING;