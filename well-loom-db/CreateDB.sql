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

CREATE TABLE theory (
    id BIGSERIAL PRIMARY KEY,
    theory_name TEXT NOT NULL,
    theory_founder TEXT,
    theory_description TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE area_theory_mapping (
    id BIGSERIAL PRIMARY KEY,
    area_id BIGINT REFERENCES area(id),
    theory_id BIGINT REFERENCES theory(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE area_theory_mapping IS 'mapping_table';
COMMENT ON COLUMN area_theory_mapping.area_id IS 'mapping_column_1';
COMMENT ON COLUMN area_theory_mapping.theory_id IS 'mapping_column_2';

CREATE TABLE practice_group (
    id BIGSERIAL PRIMARY KEY,
    practice_group_name TEXT NOT NULL,
    practice_group_description TEXT,
    practice_group_image TEXT,
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);

CREATE TABLE area_practice_group_mapping (
    id BIGSERIAL PRIMARY KEY,
    area_id BIGINT REFERENCES area(id),
    practice_group_id BIGINT REFERENCES practice_group(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE area_practice_group_mapping IS 'mapping_table';
COMMENT ON COLUMN area_practice_group_mapping.area_id IS 'mapping_column_1';
COMMENT ON COLUMN area_practice_group_mapping.practice_group_id IS 'mapping_column_2';

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

CREATE TABLE practice_group_practice_mapping (
    id BIGSERIAL PRIMARY KEY,
    practice_group_id BIGINT REFERENCES practice_group(id),
    practice_id BIGINT REFERENCES practice(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE practice_group_practice_mapping IS 'mapping_table';
COMMENT ON COLUMN practice_group_practice_mapping.practice_group_id IS 'mapping_column_1';
COMMENT ON COLUMN practice_group_practice_mapping.practice_id IS 'mapping_column_2';

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

CREATE TABLE theory_resource_mapping (
    id BIGSERIAL PRIMARY KEY,
    theory_id BIGINT REFERENCES theory(id),
    resource_id BIGINT REFERENCES resource(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE theory_resource_mapping IS 'mapping_table';
COMMENT ON COLUMN theory_resource_mapping.resource_id IS 'mapping_column_1';
COMMENT ON COLUMN theory_resource_mapping.theory_id IS 'mapping_column_2';

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
COMMENT ON TABLE practice_resource_mapping IS 'mapping_table';
COMMENT ON COLUMN practice_resource_mapping.practice_id IS 'mapping_column_1';
COMMENT ON COLUMN practice_resource_mapping.resource_id IS 'mapping_column_2';

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

CREATE TABLE area_challenge_mapping (
    id BIGSERIAL PRIMARY KEY,
    area_id BIGINT REFERENCES area(id),
    challenge_id BIGINT REFERENCES challenge(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE area_challenge_mapping IS 'mapping_table';
COMMENT ON COLUMN area_challenge_mapping.area_id IS 'mapping_column_1';
COMMENT ON COLUMN area_challenge_mapping.challenge_id IS 'mapping_column_2';

CREATE TABLE practice_challenge_mapping (
    id BIGSERIAL PRIMARY KEY,
    practice_id BIGINT REFERENCES practice(id),
    challenge_id BIGINT REFERENCES challenge(id),
    is_active BOOLEAN NOT NULL,
    created_by BIGINT,
    create_date_time TIMESTAMP,
    updated_by BIGINT,
    update_date_time TIMESTAMP
);
COMMENT ON TABLE practice_challenge_mapping IS 'mapping_table';
COMMENT ON COLUMN practice_challenge_mapping.challenge_id IS 'mapping_column_1';
COMMENT ON COLUMN practice_challenge_mapping.practice_id IS 'mapping_column_2';

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

-- Create view(s)

CREATE OR REPLACE VIEW mapping_table_metadata AS (
    SELECT
        c.relname AS table_name,
        REPLACE(a1.attname, '_', '') AS column_1,
        REPLACE(a2.attname, '_', '') AS column_2
    FROM
        pg_catalog.pg_class c
    JOIN
        pg_catalog.pg_namespace n ON c.relnamespace = n.oid
    JOIN
        pg_catalog.pg_attribute a1 ON a1.attrelid = c.oid
    JOIN
        pg_catalog.pg_attribute a2 ON a2.attrelid = c.oid
    WHERE
        n.nspname = 'public'
        AND pg_catalog.obj_description(c.oid, 'pg_class') = 'mapping_table'
        AND pg_catalog.col_description(a1.attrelid, a1.attnum) = 'mapping_column_1'
        AND pg_catalog.col_description(a2.attrelid, a2.attnum) = 'mapping_column_2'
);

INSERT INTO area(area_name, area_description, is_active) VALUES ('Spiritual', 'Spiritual pratices', true);
INSERT INTO area(area_name, area_description, is_active) VALUES ('Mental', 'Mental pratices', true);
INSERT INTO area(area_name, area_description, is_active) VALUES ('Physical', 'Physical pratices', true);

INSERT INTO theory (id, theory_name, theory_founder, theory_description, is_active) VALUES 
(1, 'Cognitive Behavioral Theory', 'Aaron Beck', 'A theory focusing on changing patterns of thinking and behavior.', true),
(2, 'Maslow''s Hierarchy of Needs', 'Abraham Maslow', 'A theory of psychological health based on fulfilling innate human needs.', true),
(3, 'Analytical Psychology', 'Carl Jung', 'Focused on becoming your true self.', true),
(4, 'Buddhism', 'Siddhartha Gautama', 'A spiritual framework focused on impermanence, the oneness of all things, and acceptance of what is.', true),
(5, 'Christianity', 'Jesus of Nazareth', 'A religion oriented around a single all-powerful god, and his son taking human form to save all humans from a torturous afterlife (Hell).', true),
(6, 'Hinduism', 'Unknown', 'A complex religion whose beliefs range from polytheism to a unitarian (''all is god'') framework.', true),
(7, 'All is One', 'Various', 'Touched on in a variety of religious & spiritual frameworks, this theory asserts that all beings & forms arise from one unified source, and return to said-source in due time, like waves in an ocean.', true);

INSERT INTO area_theory_mapping (id, area_id, theory_id, is_active) VALUES 
(1, 2, 1, true),
(2, 2, 2, true),
(3, 2, 3, true),
(4, 1, 4, true),
(5, 1, 5, true),
(6, 1, 6, true),
(7, 1, 7, true);

INSERT INTO practice_group (id, practice_group_name, practice_group_description, practice_group_image, is_active)
VALUES
    (1, 'Mindfulness', 'A group of practices for mental clarity, relaxation, and stress reduction', 'yoga_image.jpg', true),
    (2, 'Socialization', 'Connecting with and spending time with others', 'meditation_image.jpg', true),
    (3, 'Parts Work & Internal Family Systems', 'Discovering and interacting with various "parts", a.k.a. subpersonalities, to help process and heal from difficult events.', 'fitness_image.jpg', true),
    (4, 'Behavioral Theory', 'Scientifically-grounded practices to change thought patterns', 'nutrition_image.jpg', true),
    (5, 'Meditation', 'Practices that help one observe their daily mental chatter', 'mindfulness_image.jpg', true),
    (6, 'Spiritual Reading', 'Reading spiritual & religious texts', 'yoga_image.jpg', true),
    (7, 'Connect with Nature', 'Spending time in nature to connect with the source of where we come from', 'meditation_image.jpg', true),
    (8, 'Aerobic Exercise', 'Exercises that raise heartrate for an extended period of time, leading to greater aerobic, lung, and oxegen utilization capacity', 'fitness_image.jpg', true),
    (9, 'Sleep', 'Practices that help one sleep for longer each day, which has shown to be critical to mental & physical functioning', 'nutrition_image.jpg', true),
    (10, 'Strength Training', 'Exercises that help one build muscle & improve muscle to fat body composition', 'mindfulness_image.jpg', true),
    (11, 'Flexibility Training', 'Exercises that improve & maintain the body''s range of movement', 'fitness_image.jpg', true),
    (12, 'Nutrition', 'Habits and diets that increase nutritional intake and reduce consumption of harmful foods', 'nutrition_image.jpg', true);

-- Insert into area_practice_group_mapping table
INSERT INTO area_practice_group_mapping (id, area_id, practice_group_id, is_active)
VALUES
    (1, 2, 1, true),
    (2, 2, 2, true),
    (3, 2, 3, true),
    (4, 2, 4, true),
    (5, 1, 5, true),
    (6, 1, 6, true),
    (7, 1, 7, true),
    (8, 3, 8, true),
    (9, 3, 9, true),
    (10, 3, 10, true),
    (11, 3, 11, true),
    (12, 3, 12, true);

-- Insert into practice table
INSERT INTO practice (id, practice_name, practice_short_description, practice_long_description, practice_image, is_active)
VALUES
    (1, 'Breathing', 'A mind-body practice focusing on conscious breath control to improve physical and mental health.',
    'Breathing practices involve deliberate control of one''s breath to reduce stress, enhance relaxation, and improve focus. Techniques like diaphragmatic breathing and box breathing can calm the nervous system, lower blood pressure, and promote overall well-being. These practices are often integrated into meditation, yoga, and stress management routines.',
    'breathing_practice_image.jpg', true),

    (2, 'Grounding Techniques', 'Exercises designed to help individuals reconnect with the present moment and reduce stress or anxiety.',
    'Grounding techniques are strategies used to center oneself in the present moment, particularly during times of stress or anxiety. These methods can involve focusing on sensory experiences, such as feeling textures, listening to sounds, or deep breathing, to interrupt negative thought patterns. Grounding helps individuals regain a sense of control and stability.',
    'grounding_techniques_image.jpg', true),

    (3, 'Meet with Friends', 'Socializing with friends to strengthen connections, reduce stress, and promote emotional well-being.',
    'Meeting with friends provides a sense of connection and belonging that is essential for mental and emotional well-being. Socializing helps reduce feelings of loneliness and stress while boosting mood. Sharing experiences, laughter, and support with friends strengthens interpersonal bonds and enhances life satisfaction.',
    'meet_with_friends_image.jpg', true),

    (4, 'Join a Club', 'Engaging in group activities or hobbies to build community, reduce isolation, and encourage personal growth.',
    'Joining a club allows individuals to connect with others who share similar interests, hobbies, or goals. It fosters a sense of community and belonging while providing opportunities to learn, grow, and share experiences. Being part of a group can reduce isolation, improve confidence, and encourage positive interactions.',
    'join_a_club_image.jpg', true),

    (5, 'Daily Parts Practice', 'An approach where individuals focus on different "parts" of themselves to improve self-awareness and integration.',
    'Daily Parts Practice encourages individuals to explore and acknowledge the various "parts" or aspects of their personality, emotions, and thoughts. By journaling or reflecting on these parts, individuals can increase self-awareness, foster inner harmony, and address conflicting feelings or behaviors in a structured way.',
    'daily_parts_practice_image.jpg', true),

    (6, 'Journaling with Parts', 'Writing exercises that involve exploring different "parts" of the self to increase self-awareness and clarity.',
    'Journaling with Parts is a self-exploration technique where individuals write about the different facets of their inner self. This practice can help uncover hidden emotions, clarify goals, and resolve inner conflicts. It provides a safe space for reflection and growth, promoting a deeper understanding of one''s psyche.',
    'journaling_with_parts_image.jpg', true),

    (7, 'Cognitive Behavioral Therapy (CBT)', 'A therapeutic approach that helps individuals identify and challenge negative thought patterns and behaviors.',
    'Cognitive Behavioral Therapy (CBT) is a structured, evidence-based therapy that focuses on identifying and altering harmful thinking patterns and behaviors. CBT is widely used to treat anxiety, depression, and other mental health challenges by helping individuals develop healthier coping mechanisms and problem-solving skills.',
    'cbt_image.jpg', true),

    (8, 'Acceptance and Commitment Therapy (ACT)', 'A therapeutic approach that encourages individuals to accept difficult emotions and commit to behaviors aligned with their values.',
    'Acceptance and Commitment Therapy (ACT) is a mindfulness-based therapy that encourages individuals to embrace their thoughts and feelings rather than fighting or avoiding them. By aligning actions with personal values, ACT helps foster psychological flexibility and resilience, promoting a meaningful and fulfilling life.',
    'act_image.jpg', true),

    (9, 'Cognitive Behavioral Therapy (CBT)', 'A therapeutic approach that helps individuals identify and challenge negative thought patterns and behaviors.',
    'Cognitive Behavioral Therapy (CBT) is a structured, evidence-based therapy that focuses on identifying and altering harmful thinking patterns and behaviors. CBT is widely used to treat anxiety, depression, and other mental health challenges by helping individuals develop healthier coping mechanisms and problem-solving skills.',
    'cbt_image.jpg', true),

    (10, 'Metta Meditation', 'A meditation practice focused on cultivating love, kindness, and compassion towards oneself and others.',
    'Metta Meditation, also known as Loving-Kindness Meditation, is a practice aimed at developing feelings of compassion and kindness for oneself and others. By silently repeating phrases of goodwill and focusing on positive emotions, individuals can enhance empathy, reduce anger, and foster a sense of interconnectedness.',
    'metta_meditation_image.jpg', true),

    (11, 'Mantra Meditation', 'A meditation practice that involves repeating a word or phrase to focus the mind and achieve a state of calmness.',
    'Mantra Meditation is a mindfulness technique that involves silently or audibly repeating a chosen word or phrase, known as a mantra. This practice helps anchor the mind, reduce distractions, and foster inner calm. It is widely used to enhance concentration, relieve stress, and promote spiritual growth.',
    'mantra_meditation_image.jpg', true),

    (12, 'Mindfulness', 'The practice of being present and fully engaged with the current moment without judgment.',
    'Mindfulness is a mental practice that focuses on cultivating awareness of the present moment while letting go of distractions and judgments. This practice encourages individuals to engage fully with their thoughts, emotions, and surroundings, helping to reduce stress, enhance emotional regulation, and improve overall well-being.',
    'mindfulness_image.jpg', true),

    (13, 'Spiritual Reading', 'Reading sacred or inspirational texts to nurture the spirit and encourage personal growth.',
    'Spiritual reading involves exploring sacred, philosophical, or inspirational texts to gain insight, foster self-reflection, and nurture the spirit. This practice can provide guidance, promote personal growth, and offer a deeper sense of connection to one''s values and beliefs.',
    'spiritual_reading_image.jpg', true),

    (14, 'Nature Walk', 'Walking in nature to improve physical health, reduce stress, and foster a sense of connection with the natural world.',
    'A nature walk is a therapeutic activity that allows individuals to reconnect with the outdoors. By walking through natural environments such as forests, parks, or beaches, individuals can improve their physical health, lower stress levels, and develop a greater appreciation for the beauty and tranquility of the natural world.',
    'nature_walk_image.jpg', true),

    (15, 'Sit Outside', 'Spending time outside to benefit from natural light, fresh air, and connection with the outdoors.',
    'Sitting outside is a simple yet effective way to enhance mental and physical well-being. Exposure to natural light and fresh air can boost mood, improve concentration, and provide a sense of calm and relaxation. This practice encourages slowing down and connecting with the environment.',
    'sit_outside_image.jpg', true),

    (16, 'Running', 'A cardiovascular exercise that involves moving at a fast pace to improve endurance and fitness.',
    'Running is a high-intensity physical activity that enhances cardiovascular health, builds stamina, and strengthens muscles. This practice also releases endorphins, often referred to as ''feel-good'' hormones, making it an excellent way to boost mental health while staying fit.',
    'running_image.jpg', true),

    (17, 'Biking', 'A physical activity where individuals use a bicycle to enhance fitness, endurance, and cardiovascular health.',
    'Biking is a versatile exercise suitable for all fitness levels. Whether performed outdoors or on a stationary bike, it improves cardiovascular health, builds leg strength, and promotes overall endurance. Biking can also provide a sense of freedom and an opportunity to explore new surroundings.',
    'biking_image.jpg', true),

    (18, 'Brisk Walking', 'Walking at a quick pace to improve fitness, cardiovascular health, and overall well-being.',
    'Brisk walking is a low-impact exercise that promotes heart health, boosts energy levels, and aids in weight management. This practice is accessible to most individuals and can be incorporated into daily routines to improve physical and mental health.',
    'brisk_walking_image.jpg', true),

    (19, 'Nighttime Routine', 'A set of practices performed before bed to wind down and promote restful sleep.',
    'A nighttime routine involves consistent activities that prepare the body and mind for restful sleep. Common elements include reading, meditating, or practicing relaxation techniques. Establishing a routine signals to the brain that it is time to unwind, promoting better sleep quality.',
    'nighttime_routine_image.jpg', true),

    (20, 'Environmental Modification', 'Making changes to one''s environment to reduce stress and improve well-being.',
    'Environmental modification focuses on creating a space that fosters tranquility and productivity. This can involve decluttering, introducing plants, improving lighting, or adding personal touches to transform a space into a supportive and comfortable environment.',
    'environmental_modification_image.jpg', true),

    (21, 'Weight Training', 'A physical exercise that involves using weights to build strength and muscle mass.',
    'Weight training, also known as resistance training, involves exercises where you lift weights to enhance muscular strength and endurance. It targets different muscle groups and is essential for building muscle mass, improving bone density, and increasing metabolic rate. Common exercises include squats, deadlifts, and bench presses, which can be tailored to specific fitness goals and varying levels of intensity.',
    'weight_training_image.jpg', true),

    (22, 'Calisthenics', 'A form of exercise that uses bodyweight for resistance to enhance strength and flexibility.',
    'Calisthenics refers to a series of bodyweight exercises aimed at improving strength, endurance, and flexibility without the need for equipment. Common calisthenic exercises include push-ups, pull-ups, squats, and planks. This type of training can be performed anywhere, making it a versatile workout that builds functional strength and enhances mobility and coordination.',
    'calisthenics_image.jpg', true),

    (23, 'Stretching', 'Exercises designed to improve flexibility, range of motion, and muscle health.',
    'Stretching involves various exercises that target muscle groups to increase flexibility and range of motion. Regular stretching helps improve circulation, reduce the risk of injury, and ease muscle tension. It can be done before or after workouts, or as part of a dedicated flexibility routine. Static, dynamic, and PNF (proprioceptive neuromuscular facilitation) stretching techniques all contribute to muscle health and joint mobility.',
    'stretching_image.jpg', true),

    (24, 'Yoga', 'A physical, mental, and spiritual practice that incorporates breath control, meditation, and physical postures.',
    'Yoga is an ancient practice that blends physical postures (asanas), breath control (pranayama), and meditation to promote overall well-being. It helps to improve flexibility, balance, and strength while reducing stress and enhancing mindfulness. Various styles of yoga such as Hatha, Vinyasa, and Ashtanga offer different intensities and focus areas, catering to practitioners of all levels.',
    'yoga_image.jpg', true),

    (25, 'No Sugar', 'A dietary practice where individuals avoid consuming sugar to improve physical and mental health.',
    'The No Sugar practice involves eliminating added sugars from the diet to improve overall health and well-being. Reducing sugar intake can help with weight management, reduce the risk of chronic diseases like type 2 diabetes, and support better mental clarity and energy levels. The focus is on whole, nutrient-dense foods such as fruits, vegetables, and lean proteins while avoiding sugary snacks, drinks, and processed foods.',
    'no_sugar_image.jpg', true),

    (26, 'Intermittent Fasting', 'A pattern of eating where individuals cycle between periods of fasting and eating to improve health and manage weight.',
    'Intermittent fasting is an eating pattern that alternates between periods of fasting and eating. It can take various forms, such as the 16/8 method (16 hours fasting, 8 hours eating) or the 5:2 method (eating normally for 5 days, restricting calories for 2 days). This practice has been shown to promote weight loss, improve metabolic health, and enhance cellular repair processes, among other benefits.',
    'intermittent_fasting_image.jpg', true);

-- Insert into practice_group_practice_mapping table
INSERT INTO practice_group_practice_mapping (id, practice_group_id, practice_id, is_active)
VALUES
    (1, 1, 1, true),
    (2, 1, 12, true),
    (3, 2, 3, true),
    (4, 2, 4, true),
    (5, 3, 5, true),
    (6, 3, 6, true),
    (7, 4, 7, true),
    (8, 4, 8, true),
    (9, 5, 10, true),
    (10, 5, 11, true),
    (11, 6, 13, true),
    (12, 7, 14, true),
    (13, 7, 15, true),
    (14, 8, 16, true),
    (15, 8, 17, true),
    (16, 8, 18, true),
    (17, 9, 19, true),
    (18, 10, 21, true),
    (19, 10, 22, true),
    (20, 11, 23, true),
    (21, 12, 25, true),
    (22, 12, 26, true);

-- Insert into resource table
INSERT INTO resource (id, resource_name, resource_author, resource_description, resource_image, resource_link, is_active)
VALUES
    (1, 'Breath: The New Science of a Lost Art', 'James Nestor', 
    'A deep dive into the science behind breath control and its effect on physical and mental well-being.', 
    'breathing_resource_image.jpg', 'https://www.amazon.com/Breath-New-Science-Lost-Art/dp/0735213615', true),

    (2, 'The Art of Breathing Podcast', 'Dan Brule', 
    'A podcast that explores different breathing techniques and how they impact our health.', 
    'breathing_podcast_image.jpg', 'https://www.danbrule.com/podcast', true),

    (3, 'Earthing: The Most Important Health Discovery Ever!', 'Clinton Ober', 
    'A book on the health benefits of grounding, connecting with the earth for reducing stress and improving health.', 
    'grounding_resource_image.jpg', 'https://www.amazon.com/Earthing-Most-Important-Health-Discovery/dp/158542808X', true),

    (4, 'Grounded: How to Connect with the Earth for Mental Health and Healing', 'Andrew McCarthy', 
    'Techniques and strategies for grounding, focusing on mental clarity and emotional stability.', 
    'grounding_book_image.jpg', 'https://www.amazon.com/Grounded-Connect-Mental-Health-Healing/dp/168403744X', true),

    (5, 'Friendship: The Evolution, Biology, and Extraordinary Power of Life''s Fundamental Bond', 'Lydia Denworth', 
    'A book that explores the science of friendship and its impact on health and happiness.', 
    'friendship_resource_image.jpg', 'https://www.amazon.com/Friendship-Evolution-Biology-Extraordinary-Fundamental/dp/0393651429', true),

    (6, 'The Friendship Lab Podcast', 'Dr. David A. Sullivan', 
    'This podcast delves into the importance of friendships and how to foster them for better mental health.', 
    'friendship_podcast_image.jpg', 'https://www.friendshippodcast.com', true),

    (7, 'The Art of Joining: How to Connect with Groups and Communities for Personal Growth', 'Alexandra Green', 
    'A guide to using group memberships for personal development and reducing social isolation.', 
    'joining_resource_image.jpg', 'https://www.amazon.com/Art-Joining-Connect-Communities-Growth/dp/1478735032', true),

    (8, 'How to Find and Join a Club That Makes You Happy (Podcast Episode)', 'Social Connections Podcast', 
    'This episode explores how to find meaningful social groups for connection and growth.', 
    'club_podcast_image.jpg', 'https://www.socialconnectionpodcast.com', true),

    (9, 'Parts Work: An Illustrated Guide to Your Inner Life', 'Tom Holmes', 
    'A guidebook exploring how to understand and integrate the different parts of yourself.', 
    'parts_work_image.jpg', 'https://www.amazon.com/Parts-Work-Illustrated-Guide-Inner/dp/1642971849', true),

    (10, 'The Parts of You Podcast', 'Dr. Jessica Johnson', 
    'A podcast that offers insights into integrating different parts of yourself for mental clarity and peace.', 
    'parts_podcast_image.jpg', 'https://www.jessicajohnson.com/podcast', true),

    (11, 'The Feeling Good Handbook: The New Mood Therapy', 'Dr. David D. Burns', 
    'A comprehensive guide to CBT techniques for managing depression and anxiety.', 
    'cbt_handbook_image.jpg', 'https://www.amazon.com/Feeling-Good-Handbook-Therapy-Feeling/dp/0452281266', true),

    (12, 'The CBT Toolbox: A Workbook for Clients and Clinicians', 'Lisa Dion', 
    'A practical guide to CBT exercises and tools for addressing various mental health issues.', 
    'cbt_toolbox_image.jpg', 'https://www.amazon.com/CBT-Toolbox-Workbook-Clients-Clinicians/dp/168373081X', true),

    (13, 'The Happiness Trap: How to Stop Struggling and Start Living', 'Russ Harris', 
    'A guide to applying ACT principles to reduce stress and improve well-being.', 
    'act_book_image.jpg', 'https://www.amazon.com/Happiness-Trap-Struggling-Start-Living/dp/1590305841', true),

    (14, 'ACT in Action Podcast', 'Steve C. Hayes', 
    'A podcast exploring the principles of ACT and how to implement them for mental health and personal growth.', 
    'act_podcast_image.jpg', 'https://www.actinactionpodcast.com', true),

    (15, 'Cognitive Behavioral Therapy: Basics and Beyond', 'Judith S. Beck', 
    'An essential guide to understanding the core concepts and techniques of Cognitive Behavioral Therapy.', 
    'cbt_resource_image.jpg', 'https://www.amazon.com/Cognitive-Behavioral-Therapy-Basics-Beyond/dp/1606236171', true),

    (16, 'Motivation and Personality', 'Abraham Maslow', 
    'A comprehensive exploration of Maslow''s theory of motivation and his hierarchy of needs.', 
    'maslow_resource_image.jpg', 'https://www.amazon.com/Motivation-Personality-Abraham-Maslow/dp/0060419873', true),

    (17, 'Man and His Symbols', 'Carl Jung', 
    'Jung''s key work that introduces his theory of analytical psychology, focusing on the role of symbols in the human experience.', 
    'jung_resource_image.jpg', 'https://www.amazon.com/Man-His-Symbols-Carl-Jung/dp/0440351839', true),

    (18, 'The Heart of the Buddha''s Teaching', 'Thich Nhat Hanh', 
    'A spiritual guide to understanding the core teachings of Buddhism and its path to enlightenment.', 
    'buddhism_resource_image.jpg', 'https://www.amazon.com/Heart-Buddhas-Teaching-Transformations-Enlightenment/dp/0767903692', true),

    (19, 'The Bible', 'Various Authors', 
    'The foundational religious text of Christianity, detailing the life, teachings, and sacrifice of Jesus Christ.', 
    'christianity_resource_image.jpg', 'https://www.amazon.com/Bible-King-James-Authorized/dp/1503215150', true),

    (20, 'The Bhagavad Gita', 'Various Authors', 
    'One of the core texts of Hinduism, offering a conversation between Prince Arjuna and the god Krishna on life, duty, and spirituality.', 
    'hinduism_resource_image.jpg', 'https://www.amazon.com/Bhagavad-Gita-Translation-Eknath-Easwaran/dp/1586380190', true),

    (21, 'The Tao Te Ching', 'Lao Tzu', 
    'A classic text on Taoist philosophy that explores the interconnectedness of all things and the balance of the universe.', 
    'all_is_one_resource_image.jpg', 'https://www.amazon.com/Tao-Te-Ching-Lao-Tzu/dp/1590305469', true);

-- Insert into theory_resource_mapping table
INSERT INTO theory_resource_mapping (id, theory_id, resource_id, is_active)
VALUES
    (1, 1, 15, true),
    (2, 2, 16, true),
    (3, 3, 17, true),
    (4, 4, 18, true),
    (5, 5, 19, true),
    (6, 6, 20, true),
    (7, 7, 21, true);

-- Insert into practice_resource_mapping table
INSERT INTO practice_resource_mapping (id, practice_id, resource_id, is_active)
VALUES
    (1, 1, 1, true),
    (2, 2, 2, true),
    (3, 3, 5, true),
    (4, 4, 7, true),
    (5, 5, 9, true),
    (6, 6, 10, true),
    (7, 7, 11, true),
    (8, 8, 13, true),
    (9, 9, 14, true),
    (10, 10, 12, true),
    (11, 11, 6, true),
    (12, 12, 3, true),
    (13, 13, 8, true),
    (14, 14, 4, true),
    (15, 15, 2, true),
    (16, 16, 5, true),
    (17, 17, 7, true),
    (18, 18, 9, true),
    (19, 19, 11, true),
    (20, 20, 12, true);

-- Insert into challenge table
INSERT INTO challenge (id, challenge_name, challenge_description, is_active)
VALUES
    (1, 'Anxiety', 'A feeling of worry, nervousness, or unease.', true),
    (2, 'Fatigue', 'A state of extreme tiredness or lack of energy.', true),
    (3, 'Depression', 'A mood disorder characterized by persistent feelings of sadness.', true),
    (4, 'Insomnia', 'Difficulty falling or staying asleep.', true),
    (5, 'Chronic Pain', 'Persistent pain that lasts for weeks or months.', true),
    (6, 'Lack of Meaning & Purpose', 'A feeling of worry, nervousness, or unease.', true),
    (7, 'Feeling Isolated or Lonely', 'A state of extreme tiredness or lack of energy.', true),
    (8, 'Feeling like something''s missing', 'A mood disorder characterized by persistent feelings of sadness.', true),
    (9, 'Excessive Weight', 'Difficulty falling or staying asleep.', true),
    (10, 'Lack of Mobility', 'Persistent pain that lasts for weeks or months.', true);

-- Insert into area_challenge_mapping table
INSERT INTO area_challenge_mapping (id, area_id, challenge_id, is_active)
VALUES
    (1, 1, 1, true),
    (2, 1, 6, true),
    (3, 2, 2, true),
    (4, 2, 3, true),
    (5, 3, 4, true),
    (6, 3, 5, true),
    (7, 3, 9, true),
    (8, 3, 10, true);

-- Insert into practice_challenge_mapping table
INSERT INTO practice_challenge_mapping (id, practice_id, challenge_id, is_active)
VALUES
    (1, 1, 1, true),
    (2, 2, 1, true),
    (3, 3, 7, true),
    (4, 4, 7, true),
    (5, 5, 6, true),
    (6, 6, 6, true),
    (7, 7, 2, true),
    (8, 8, 3, true),
    (9, 9, 3, true),
    (10, 10, 6, true),
    (11, 12, 4, true),
    (12, 14, 4, true),
    (13, 19, 4, true),
    (14, 24, 5, true),
    (15, 21, 5, true),
    (16, 17, 5, true),
    (17, 23, 9, true),
    (18, 19, 9, true),
    (19, 24, 9, true),
    (20, 25, 9, true);
