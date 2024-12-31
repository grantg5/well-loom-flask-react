-- Create datetime function
CREATE FUNCTION set_create_date_time() RETURNS TRIGGER AS $set_create_date_time$
  BEGIN
    NEW.create_date_time:= current_timestamp;
    RETURN NEW;
  END;
$set_create_date_time$ LANGUAGE plpgsql;

CREATE FUNCTION apply_create_date_time_triggers() RETURNS TEXT AS $apply_create_date_time_triggers$
DECLARE returnValue text;
  BEGIN
    SELECT string_agg(format('CREATE TRIGGER set_create_date_time BEFORE UPDATE ON %s '
                         'FOR EACH ROW EXECUTE PROCEDURE set_create_date_time();'
                        , c.oid::regclass), E'\n')
    FROM pg_namespace n
    JOIN pg_class c ON c.relnamespace = n.oid
    JOIN information_schema.tables inf_sch ON inf_sch.table_name = c.relname
    WHERE  inf_sch.table_schema = 'public'
    INTO returnValue;

    return returnValue;
  END;
$apply_create_date_time_triggers$ LANGUAGE plpgsql;

SELECT apply_create_date_time_triggers();

-- Although this is returning the CREATE TRIGGER statements, it's not executing them. Need to figure that out...