import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO contact_messages (user_name, user_email, subject, message) VALUES ($1, $2, $3, $4)',
      [user_name, user_email, subject, message]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
