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


// Webhook integration
async function submitToWebhook(formData) {
  const payload = {
    user_name: formData.user_name,
    user_email: formData.user_email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString()
  };

  console.log('📤 Sending data to webhook:', JSON.stringify(payload, null, 2));

  try {
    const response = await fetch('https://hook.eu2.make.com/hlnub0zoe81eu27teg7ae3hasm2juot8', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    console.log('📡 Webhook response status:', response.status);
    const responseText = await response.text();
    console.log('📡 Webhook response body:', responseText);

    if (response.ok) {
      console.log('✅ Webhook submitted successfully!');
      return { success: true };
    } else {
      console.log('❌ Webhook failed with status:', response.status, 'Body:', responseText);
      throw new Error(`Webhook error! status: ${response.status}, body: ${responseText}`);
    }
  } catch (error) {
    console.error('❌ Webhook network error:', error.message);
    throw error;
  }
}

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;
  try {
    // Neon DB insert
    await pool.query(
      'INSERT INTO contact_messages (user_name, user_email, subject, message) VALUES ($1, $2, $3, $4)',
      [user_name, user_email, subject, message]
    );
    // Webhook integration
    await submitToWebhook({ user_name, user_email, subject, message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
