// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`...`;
    return data;
}

// ...existing code...
export async function saveContactForm({ user_name, user_email, subject, message }: {
    user_name: string,
    user_email: string,
    subject: string,
    message: string
}) {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
        INSERT INTO contact_messages (user_name, user_email, subject, message)
        VALUES (${user_name}, ${user_email}, ${subject}, ${message})
    `;
    return { success: true };
}
// ...existing code...