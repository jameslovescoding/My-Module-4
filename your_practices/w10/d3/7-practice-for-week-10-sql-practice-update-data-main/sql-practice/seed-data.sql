DROP TABLE IF EXISTS friends;

.head on

.mode column

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

INSERT INTO friends (first_name, last_name)
VALUES
  ('Ryan', 'Pond'),
  ('Sky', 'Tyler'),
  ('Morgan', 'Jones'),
  ('Shannon', 'Noble'),
  ('River', 'Song');

SELECT * FROM friends;

UPDATE friends
SET first_name = 'Ryder'
WHERE first_name = 'Ryan'
AND last_name = 'Pond';

SELECT * FROM friends
WHERE first_name = 'Ryder'
AND last_name = 'Pond';