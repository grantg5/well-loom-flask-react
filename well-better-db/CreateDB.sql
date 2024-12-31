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
  created_by bigint references well_better_user(user_id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(user_id),
  update_date_time timestamp
);

CREATE TABLE practice (
  id BIGSERIAL PRIMARY KEY,
  name text,
  category bigint references reference_lookup(ref_id),
  is_active boolean,
  created_by bigint references well_better_user(user_id),
  create_date_time timestamp,
  updated_by bigint references well_better_user(user_id),
  update_date_time timestamp
);


-- TODO: Pull trigger stuff pulled out back into here