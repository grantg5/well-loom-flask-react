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