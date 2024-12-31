-- Create datetime function
CREATE FUNCTION set_create_date_time() RETURNS TRIGGER AS $set_create_date_time$
  BEGIN
    execute format('UPDATE % SET create_date_time = NOW() WHERE id = %', TG_TABLE_NAME, NEW.id) into result;
    return result;
  END;
$set_create_date_time$ LANGUAGE plpgsql

CREATE FUNCTION apply_create_date_time_triggers() RETURNS TEXT AS $apply_create_date_time_triggers$
  BEGIN
    SELECT string_agg(format('CREATE TRIGGER set_create_date_time BEFORE UPDATE ON %s '
                         'FOR EACH ROW EXECUTE PROCEDURE set_create_date_time();'
                        , c.oid::regclass), E'\n')
    FROM   pg_namespace n
    JOIN   pg_class     c ON c.relnamespace = n.oid
    WHERE  n.nspname = 'public';

    -- execute format(
    --   'CREATE TRIGGER create_date_time AFTER INSERT ON
    --     (SELECT table_name FROM information_schema.tables
    --     WHERE table_schema NOT IN ("pg_catalog", "information_schema")
    --     AND table_type = "BASE TABLE")
    --   FOR EACH ROW EXECUTE PROCEDURE set_create_date_time();'
    --   ) into temp;

  END;
$apply_create_date_time_triggers$ LANGUAGE plpgsql

CALL apply_create_date_time_triggers();