import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import CreditContact from '@/models/CreditContact';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Save to CreditContact collection (Ceylon Credit data only)
    const newContact = await CreditContact.create({ ...body, source: 'ceylon-credit' });

    // Email to company (Ceylon Credit)
    await transporter.sendMail({
      from: '"Ceylon Credit Website" <vishmikavindya722@gmail.com>',
      to: 'vishmikavindya722@gmail.com',
      subject: `📩 [CEYLON CREDIT] New Inquiry – ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 22px;">Ceylon Credit</h1>
            <p style="color: #b8a06a; margin: 4px 0 0;">New Contact Form Submission</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 140px;"><strong>Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.email}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Service</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.service || body.subject || 'Not specified'}</td></tr>
              <tr><td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Message</strong></td><td style="padding: 10px 0;">${body.message}</td></tr>
            </table>
          </div>
          <div style="background: #f7f9fc; padding: 16px 32px; text-align: center; color: #999; font-size: 12px;">
            This is an automated message from the Ceylon Credit website.
          </div>
        </div>
      `
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: '"Ceylon Credit" <vishmikavindya722@gmail.com>',
      to: body.email,
      subject: 'Thank You for Contacting Ceylon Credit',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 22px;">Ceylon Credit</h1>
          </div>
          <div style="padding: 32px;">
            <p style="font-size: 16px;">Dear <strong>${body.name}</strong>,</p>
            <p style="color: #444; line-height: 1.6;">Thank you for reaching out to Ceylon Credit. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
            <p style="color: #444; line-height: 1.6;">If you have any urgent queries, please feel free to call us directly.</p>
            <p style="margin-top: 32px; color: #444;">Best Regards,<br/><strong>Ceylon Credit Team</strong></p>
          </div>
          <div style="background: #f7f9fc; padding: 16px 32px; text-align: center; color: #999; font-size: 12px;">
            © 2024 Ceylon Credit. All rights reserved.
          </div>
        </div>
      `
    });

    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    console.error('❌ Ceylon Credit Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send message', detail: String(error) }, { status: 500 });
  }
}
