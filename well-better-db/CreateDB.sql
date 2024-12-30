CREATE TABLE user (
  user_id BIGSERIAL PRIMARY KEY,
  email text,
  is_active boolean
);

CREATE TABLE reference_lookup (
  ref_id BIGSERIAL PRIMARY KEY,
  category text,
  value text,
  is_active boolean,
  created_by bigint references user(user_id),
  create_date_time timestamp,
  updated_by bigint references user(user_id),
  update_date_tiem timestamp
);

CREATE TABLE practice (
  practice_id BIGSERIAL PRIMARY KEY,
  name text,
  category bigint references reference_lookup(ref_id),
  is_active boolean,
  created_by bigint references user(user_id),
  create_date_time timestamp,
  updated_by bigint references user(user_id),
  update_date_tiem timestamp
);
