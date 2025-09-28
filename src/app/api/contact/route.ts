import { NextResponse } from 'next/server';
import { saveContactForm } from '../../../../actions';

export async function POST(req: Request) {
    const data = await req.json();
    try {
        await saveContactForm(data);
        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
    }
}