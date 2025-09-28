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


// Zapier integration
async function submitToZapier(formData) {
  // Prepare data with EXACT field IDs from your Interface
  // const formDataParams = new URLSearchParams({
  //   'cmg3z0wlo00560bjp6sog8j8l': formData.user_name,       // Name field
  //   'cmg3z0wlo00570bjp7398a03y': formData.user_email,     // Email field
  //   'cmg3z0wlo00580bjpcwx59v2k': formData.subject,        // Subject field
  //   'cmg3z0wlo00590bjpaai1ayx6': formData.message,        // Message field
  //   'cmg3z0wlo005a0bjp17xr68hl': new Date().toISOString() // Auto-set current date
  // });

  // const response = await fetch('https://untitled-zap-interface-bbe0c8.zapier.app/mailautomation', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: formDataParams
  // });

  // EXACT field IDs from your Interface
  // Before sending, log the exact payload
  const formDataParams = new URLSearchParams({
    'cmg3z0wlo00560bjp6sog8j8l': 'Test Name',
    'cmg3z0wlo00570bjp7398a03y': 'test@example.com',
    'cmg3z0wlo00580bjpcwx59v2k': 'Test Subject',
    'cmg3z0wlo00590bjpaai1ayx6': 'Test Message',
    'cmg3z0wlo005a0bjp17xr68hl': new Date().toISOString()
  });

  console.log('Sending this exact data:');
  console.log(formDataParams.toString());
  // This should output something like:
  // cmg3z0wlo00560bjp6sog8j8l=Test+Name&cmg3z0wlo00570bjp7398a03y=test%40example.com&...

  console.log('Sending data:', formDataParams.toString()); // Debug: see what's being sent

  try {
    const response = await fetch('https://untitled-zap-interface-bbe0c8.zapier.app/mailautomation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formDataParams
    });

    console.log('Response status:', response.status); // Debug: see response
    console.log('Response ok:', response.ok);

    if (response.ok) {
      console.log('✅ Success!');
    } else {
      console.log('❌ Failed with status:', response.status);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }

  // if (response.ok) {
  //   console.log('Form submitted successfully to Zapier!');
  //   return { success: true };
  // } else {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }
}

app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;
  try {
    // Neon DB insert
    await pool.query(
      'INSERT INTO contact_messages (user_name, user_email, subject, message) VALUES ($1, $2, $3, $4)',
      [user_name, user_email, subject, message]
    );
    // Zapier integration
    await submitToZapier({ user_name, user_email, subject, message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
