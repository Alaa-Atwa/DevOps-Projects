const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

// connect to database 
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// DATABASE_URL is an environment variable defined inside compose.yml file 

// GET /notes — list all notes
app.get("/notes", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM notes ORDER BY id");
  res.json(rows);
});

// POST /notes — create a note  { "text": "..." }
app.post("/notes", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "text is required" });
  const { rows } = await pool.query(
    "INSERT INTO notes (text) VALUES ($1) RETURNING *",
    [text]
  );
  res.status(201).json(rows[0]);
});

// DELETE /notes/:id — delete a note
app.delete("/notes/:id", async (req, res) => {
  const { rowCount } = await pool.query("DELETE FROM notes WHERE id = $1", [req.params.id]);
  if (!rowCount) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Deleted" });
});

// start 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));