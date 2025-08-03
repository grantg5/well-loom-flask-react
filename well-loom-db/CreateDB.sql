-- Creating tables
CREATE TABLE area (
    id BIGSERIAL PRIMARY KEY,
    area_name TEXT NOT NULL,
    area_description TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE well_being_component (
    id BIGSERIAL PRIMARY KEY,
    component_name TEXT NOT NULL,
    component_description TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE area_component_mapping (
    id BIGSERIAL PRIMARY KEY,
    area_id BIGINT REFERENCES area(id),
    component_id BIGINT REFERENCES component(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE practice (
    id BIGSERIAL PRIMARY KEY,
    practice_name TEXT NOT NULL,
    practice_short_description TEXT,
    practice_long_description TEXT,
    practice_image TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE component_practice_mapping (
    id BIGSERIAL PRIMARY KEY,
    component_id BIGINT REFERENCES component(id),
    practice_id BIGINT REFERENCES practice(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE resource (
    id BIGSERIAL PRIMARY KEY,
    resource_name TEXT NOT NULL,
    resource_author TEXT,
    resource_description TEXT,
    resource_image TEXT,
    resource_link TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE practice_resource_mapping (
    id BIGSERIAL PRIMARY KEY,
    practice_id BIGINT REFERENCES practice(id),
    resource_id BIGINT REFERENCES resource(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE challenge (
    id BIGSERIAL PRIMARY KEY,
    challenge_name TEXT NOT NULL,
    challenge_description TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE component_challenge_mapping (
    id BIGSERIAL PRIMARY KEY,
    component_id BIGINT REFERENCES component(id),
    challenge_id BIGINT REFERENCES challenge(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
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

INSERT INTO area(area_name, area_description, is_active) VALUES ('Hull', 'Foundation required to live well', true);
INSERT INTO area(area_name, area_description, is_active) VALUES ('Sail', 'Expansionary elements that are required to live a full life', true);
INSERT INTO area(area_name, area_description, is_active) VALUES ('Sky', 'Experiencing beyond oneself', true);

-- INSERT INTO well_being_component table
INSERT INTO well_being_component (id, component_name, component_description, component_image, is_active)
VALUES
    (1, 'Safety', 'Little unnecessary anxiety, and a general sense of safety', true),
    (2, 'Relationships', 'Having strong, nurturing relationships, and a solid support system', true),
    (3, 'Esteem', 'Feeling generally competent, worthwhile, and like you deserve to live a good life', true),
    (4, 'Exploration', 'Trying new things, having new experiences, and expanding your mind in new ways on a regular basis', true),
    (5, 'Love', 'Holding deep intimate connections, and a general sense of positive regard for other life', true),
    (6, 'Purpose', 'Feeling like your unique gifts and interests are being put to good use', true),
    (7, 'Transcendence', 'Connecting with something beyond yourself, and having an experience seemingly beyond the walls of your mind', true);

-- INSERT INTO area_well_being_component_mapping table
INSERT INTO area_component_mapping (id, area_id, component_id, is_active)
VALUES
    (1, 1, 1, true),
    (2, 1, 2, true),
    (3, 1, 3, true),
    (4, 2, 4, true),
    (5, 2, 5, true),
    (6, 2, 6, true),
    (7, 3, 7, true);

-- INSERT INTO practice table
INSERT INTO practice (id, practice_name, practice_short_description, practice_long_description, is_active)
VALUES
    (1, 'Cognitive Behavioral Therapy', 'Questioning your own thoughts', 'Learning to question your own inner thoughts and beliefs', true),
    (2, 'Breath Work', 'Controlled breathing exercises', 'Learning various breathing techniques to reduce stress and improve mental clarity', true),
    (3, 'Grounding Techniques', 'Connecting with the earth', 'Practices that help you feel physically and emotionally grounded through earth connection', true),
    (4, 'Building Friendships', 'Fostering meaningful connections', 'Developing and maintaining healthy friendships for emotional support and growth', true),
    (5, 'Joining Groups', 'Connecting with communities', 'Finding and participating in groups that align with your interests and values', true),
    (6, 'Parts Work', 'Inner self integration', 'Understanding and integrating different aspects of your personality and psyche', true),
    (7, 'Acceptance and Commitment Therapy', 'Accepting what is while committing to values', 'Learning to accept difficult emotions while taking action aligned with your values', true),
    (8, 'Mindfulness Meditation', 'Present moment awareness', 'Developing the ability to stay present and aware of your thoughts and feelings without judgment', true),
    (9, 'Journaling', 'Written self-reflection', 'Regular writing practice to explore thoughts, emotions, and experiences for personal insight', true),
    (10, 'Gratitude Practice', 'Focusing on appreciation', 'Daily practices to cultivate appreciation and positive perspective on life', true),
    (11, 'Physical Exercise', 'Regular body movement', 'Engaging in physical activities to improve both physical and mental well-being', true),
    (12, 'Progressive Muscle Relaxation', 'Systematic tension release', 'Learning to systematically tense and relax muscle groups to reduce physical stress', true),
    (13, 'Creative Expression', 'Artistic self-expression', 'Using art, music, writing, or other creative outlets for emotional processing and joy', true),
    (14, 'Sleep Hygiene', 'Healthy sleep practices', 'Developing consistent routines and habits that promote quality sleep', true),
    (15, 'Nutrition Mindfulness', 'Conscious eating practices', 'Paying attention to food choices and eating habits for physical and mental wellness', true),
    (16, 'Nature Connection', 'Spending time outdoors', 'Regular engagement with natural environments for stress reduction and perspective', true),
    (17, 'Massage Therapy', 'Therapeutic touch', 'Professional bodywork to release physical tension and promote relaxation', true),
    (18, 'Spiritual Study', 'Exploring meaning and purpose', 'Studying religious or philosophical texts to deepen understanding of life''s meaning', true),
    (19, 'Community Service', 'Helping others', 'Volunteering and contributing to your community for purpose and connection', true),
    (20, 'Meditation Retreats', 'Intensive spiritual practice', 'Participating in extended periods of meditation and spiritual contemplation', true);

-- INSERT INTO well_being_component_practice_mapping table
INSERT INTO component_practice_mapping (id, component_id, practice_id, is_active)
VALUES
    (1, 1, 1, true),   -- Safety - Cognitive Behavioral Therapy
    (2, 1, 2, true),   -- Safety - Breath Work
    (3, 1, 3, true),   -- Safety - Grounding Techniques
    (4, 1, 8, true),   -- Safety - Mindfulness Meditation
    (5, 1, 12, true),  -- Safety - Progressive Muscle Relaxation
    (6, 1, 14, true),  -- Safety - Sleep Hygiene
    (7, 2, 4, true),   -- Relationships - Building Friendships
    (8, 2, 5, true),   -- Relationships - Joining Groups
    (9, 2, 19, true),  -- Relationships - Community Service
    (10, 3, 1, true),  -- Esteem - Cognitive Behavioral Therapy
    (11, 3, 6, true),  -- Esteem - Parts Work
    (12, 3, 7, true),  -- Esteem - Acceptance and Commitment Therapy
    (13, 3, 9, true),  -- Esteem - Journaling
    (14, 3, 10, true), -- Esteem - Gratitude Practice
    (15, 3, 13, true), -- Esteem - Creative Expression
    (16, 4, 13, true), -- Exploration - Creative Expression
    (17, 4, 16, true), -- Exploration - Nature Connection
    (18, 4, 18, true), -- Exploration - Spiritual Study
    (19, 4, 20, true), -- Exploration - Meditation Retreats
    (20, 5, 4, true),  -- Love - Building Friendships
    (21, 5, 5, true),  -- Love - Joining Groups
    (22, 5, 10, true), -- Love - Gratitude Practice
    (23, 5, 17, true), -- Love - Massage Therapy
    (24, 5, 19, true), -- Love - Community Service
    (25, 6, 9, true),  -- Purpose - Journaling
    (26, 6, 18, true), -- Purpose - Spiritual Study
    (27, 6, 19, true), -- Purpose - Community Service
    (28, 6, 13, true), -- Purpose - Creative Expression
    (29, 7, 8, true),  -- Transcendence - Mindfulness Meditation
    (30, 7, 18, true), -- Transcendence - Spiritual Study
    (31, 7, 20, true), -- Transcendence - Meditation Retreats
    (32, 7, 16, true), -- Transcendence - Nature Connection
    (33, 1, 11, true), -- Safety - Physical Exercise
    (34, 1, 15, true), -- Safety - Nutrition Mindfulness
    (35, 3, 11, true), -- Esteem - Physical Exercise
    (36, 4, 11, true), -- Exploration - Physical Exercise
    (37, 2, 17, true), -- Relationships - Massage Therapy
    (38, 5, 8, true),  -- Love - Mindfulness Meditation
    (39, 6, 11, true), -- Purpose - Physical Exercise
    (40, 7, 17, true); -- Transcendence - Massage Therapy

-- INSERT INTO resource table
INSERT INTO resource (id, resource_name, resource_author, resource_description, resource_image, resource_link, is_active)
VALUES
    (1, 'The Wim Hof Method', 'Wim Hof', 
    'A comprehensive guide to the Wim Hof breathing method and cold exposure techniques for health and performance.', 
    'wim_hof_resource_image.jpg', 'https://www.amazon.com/Wim-Hof-Method-Activate-Potential/dp/1683644093', true),

    (2, 'Grounding Techniques Workbook', 'Matthew McKay', 
    'Practical exercises and techniques for grounding yourself during anxiety and stress.', 
    'grounding_workbook_image.jpg', 'https://www.amazon.com/Grounding-Techniques-Workbook-Matthew-McKay/dp/1684034582', true),

    (3, 'How to Win Friends and Influence People', 'Dale Carnegie', 
    'A classic guide to building meaningful relationships and improving social skills.', 
    'carnegie_book_image.jpg', 'https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034', true),

    (4, 'The Like Switch', 'Jack Schafer', 
    'FBI behavioral analysis techniques for building rapport and making connections with others.', 
    'like_switch_image.jpg', 'https://www.amazon.com/Like-Switch-Influencing-Attracting-Winning/dp/1476754489', true),

    (5, 'Bowling Alone', 'Robert Putnam', 
    'An examination of the decline of social capital and the importance of community engagement.', 
    'bowling_alone_image.jpg', 'https://www.amazon.com/Bowling-Alone-Collapse-American-Community/dp/0743203046', true),

    (6, 'No Bad Parts', 'Richard Schwartz', 
    'An introduction to Internal Family Systems therapy and understanding your inner parts.', 
    'no_bad_parts_image.jpg', 'https://www.amazon.com/No-Bad-Parts-Restoring-Wholeness/dp/1683646689', true),

    (7, 'ACT Made Simple', 'Russ Harris', 
    'A practical guide to Acceptance and Commitment Therapy principles and techniques.', 
    'act_made_simple_image.jpg', 'https://www.amazon.com/ACT-Made-Simple-Quick-Reference/dp/1572247053', true),

    (8, 'Wherever You Go, There You Are', 'Jon Kabat-Zinn', 
    'A comprehensive introduction to mindfulness meditation and its practical applications.', 
    'kabat_zinn_image.jpg', 'https://www.amazon.com/Wherever-You-Go-There-Are/dp/1401307787', true),

    (9, 'The Artist''s Way', 'Julia Cameron', 
    'A spiritual path to higher creativity through morning pages and other creative practices.', 
    'artists_way_image.jpg', 'https://www.amazon.com/Artists-Way-Spiritual-Higher-Creativity/dp/1585421464', true),

    (10, 'The Gratitude Diaries', 'Janice Kaplan', 
    'A year-long journey exploring the transformative power of gratitude in daily life.', 
    'gratitude_diaries_image.jpg', 'https://www.amazon.com/Gratitude-Diaries-Year-Looking-Bright/dp/1101984139', true),

    (11, 'Spark: The Revolutionary New Science of Exercise and the Brain', 'John Ratey', 
    'Scientific evidence for how physical exercise improves brain function and mental health.', 
    'spark_exercise_image.jpg', 'https://www.amazon.com/Spark-Revolutionary-Science-Exercise-Brain/dp/0316113514', true),

    (12, 'The Relaxation Response', 'Herbert Benson', 
    'A medical approach to stress reduction through relaxation techniques and meditation.', 
    'relaxation_response_image.jpg', 'https://www.amazon.com/Relaxation-Response-Herbert-Benson/dp/0380815958', true),

    (13, 'Big Magic: Creative Living Beyond Fear', 'Elizabeth Gilbert', 
    'An inspiring guide to living creatively and overcoming the fears that block artistic expression.', 
    'big_magic_image.jpg', 'https://www.amazon.com/Big-Magic-Creative-Living-Beyond/dp/1594634718', true),

    (14, 'Why We Sleep', 'Matthew Walker', 
    'Comprehensive research on the importance of sleep for physical and mental health.', 
    'why_we_sleep_image.jpg', 'https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316', true),

    (15, 'Intuitive Eating', 'Evelyn Tribole', 
    'A revolutionary approach to eating that focuses on body wisdom and rejecting diet culture.', 
    'intuitive_eating_image.jpg', 'https://www.amazon.com/Intuitive-Eating-Revolutionary-Program-Works/dp/1250004047', true),

    (16, 'The Nature Fix', 'Florence Williams', 
    'Scientific exploration of how nature exposure improves health, well-being, and creativity.', 
    'nature_fix_image.jpg', 'https://www.amazon.com/Nature-Fix-Therapy-Human-Nature/dp/0393355055', true),

    (17, 'The Body Keeps the Score', 'Bessel van der Kolk', 
    'Groundbreaking research on trauma and the role of body-based therapies in healing.', 
    'body_keeps_score_image.jpg', 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748', true),

    (18, 'A New Earth', 'Eckhart Tolle', 
    'A spiritual guide to awakening to your life''s purpose and finding inner peace.', 
    'new_earth_image.jpg', 'https://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963', true),

    (19, 'The Power of Giving', 'Azim Jamal', 
    'How generosity and service to others creates meaning and fulfillment in life.', 
    'power_of_giving_image.jpg', 'https://www.amazon.com/Power-Giving-Generosity-Fulfillment-Happiness/dp/0399533591', true),

    (20, 'Retreat: How the Power of Quiet Can Change Your Life', 'Pico Iyer', 
    'An exploration of the transformative power of solitude and contemplative practices.', 
    'retreat_book_image.jpg', 'https://www.amazon.com/Retreat-Power-Quiet-Change-Your/dp/0307907171', true);

-- INSERT INTO practice_resource_mapping table
INSERT INTO practice_resource_mapping (id, practice_id, resource_id, is_active)
VALUES
    (1, 2, 1, true),   -- Breath Work - The Wim Hof Method
    (2, 3, 2, true),   -- Grounding Techniques - Grounding Techniques Workbook
    (3, 4, 3, true),   -- Building Friendships - How to Win Friends and Influence People
    (4, 4, 4, true),   -- Building Friendships - The Like Switch
    (5, 5, 5, true),   -- Joining Groups - Bowling Alone
    (6, 6, 6, true),   -- Parts Work - No Bad Parts
    (7, 7, 7, true),   -- Acceptance and Commitment Therapy - ACT Made Simple
    (8, 8, 8, true),   -- Mindfulness Meditation - Wherever You Go, There You Are
    (9, 9, 9, true),   -- Journaling - The Artist's Way
    (10, 10, 10, true), -- Gratitude Practice - The Gratitude Diaries
    (11, 11, 11, true), -- Physical Exercise - Spark
    (12, 12, 12, true), -- Progressive Muscle Relaxation - The Relaxation Response
    (13, 13, 13, true), -- Creative Expression - Big Magic
    (14, 13, 9, true),  -- Creative Expression - The Artist's Way
    (15, 14, 14, true), -- Sleep Hygiene - Why We Sleep
    (16, 15, 15, true), -- Nutrition Mindfulness - Intuitive Eating
    (17, 16, 16, true), -- Nature Connection - The Nature Fix
    (18, 17, 17, true), -- Massage Therapy - The Body Keeps the Score
    (19, 18, 18, true), -- Spiritual Study - A New Earth
    (20, 19, 19, true), -- Community Service - The Power of Giving
    (21, 20, 20, true); -- Meditation Retreats - Retreat