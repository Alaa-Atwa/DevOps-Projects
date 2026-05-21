-- Initialize database schema
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO
    items (name)
VALUES
    ('task 1 inserted'),
    ('task 2 inserted'),
    ('task 3 inserted');