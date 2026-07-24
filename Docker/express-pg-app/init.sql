CREATE TABLE IF NOT EXISTS notes (
  id   SERIAL PRIMARY KEY,
  text TEXT        NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
 
INSERT INTO notes (text) VALUES
  ('Hello from PostgreSQL!'),
  ('Notes and Notes .');
