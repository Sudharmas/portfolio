import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import { MongoClient } from 'mongodb';
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

// MongoDB connection
const mongoClient = new MongoClient(process.env.MONGODB_URI);
let mongoDb;
mongoClient.connect().then(client => {
  mongoDb = client.db(process.env.MONGODB_DBNAME);
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;
  try {
    // Neon DB insert
    await pool.query(
      'INSERT INTO contact_messages (user_name, user_email, subject, message) VALUES ($1, $2, $3, $4)',
      [user_name, user_email, subject, message]
    );
    // MongoDB insert
    if (mongoDb) {
      await mongoDb.collection('contact_messages').insertOne({ user_name, user_email, subject, message });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
