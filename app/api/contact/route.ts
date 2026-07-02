import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Database එකට දානවා
    const newContact = await Contact.create(body);

    // අපිට ඉමේල් එකක් යවනවා
    await transporter.sendMail({
      from: '"Website Contact" <vishmikavindya722@gmail.com>',
      to: 'vishmikavindya722@gmail.com',
      subject: 'New Message from Contact Form',
      text: `Name: ${body.name}, Email: ${body.email}, Phone: ${body.phone}, Service: ${body.service}, Message: ${body.message}`
    });

    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}