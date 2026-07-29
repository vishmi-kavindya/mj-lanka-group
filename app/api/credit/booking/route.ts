import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import CreditBooking from '@/models/CreditBooking';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Save to CreditBooking collection (Ceylon Credit data only)
    const newBooking = await CreditBooking.create({ ...body, source: 'ceylon-credit' });

    // Email to company (Ceylon Credit)
    await transporter.sendMail({
      from: '"Ceylon Credit Website" <vishmikavindya722@gmail.com>',
      to: 'vishmikavindya722@gmail.com',
      subject: `💰 [CEYLON CREDIT] New Application – ${body.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 22px;">Ceylon Credit</h1>
            <p style="color: #b8a06a; margin: 4px 0 0;">New Loan Application Received</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 140px;"><strong>Full Name</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.fullName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Phone</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.phone}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Email</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.email}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Location</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.location}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Loan / Facility Type</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.assetType}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Preferred Date</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.preferredDate}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>Preferred Time</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${body.preferredTime}</td></tr>
              <tr><td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Notes</strong></td><td style="padding: 10px 0;">${body.notes || 'No additional notes'}</td></tr>
            </table>
          </div>
          <div style="background: #f7f9fc; padding: 16px 32px; text-align: center; color: #999; font-size: 12px;">
            This is an automated message from the Ceylon Credit website.
          </div>
        </div>
      `
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: '"Ceylon Credit" <vishmikavindya722@gmail.com>',
      to: body.email,
      subject: 'Application Confirmation – Ceylon Credit',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0; font-size: 22px;">Ceylon Credit</h1>
            <p style="color: #b8a06a; margin: 4px 0 0;">Application Confirmation</p>
          </div>
          <div style="padding: 32px;">
            <p style="font-size: 16px;">Dear <strong>${body.fullName}</strong>,</p>
            <p style="color: #444; line-height: 1.6;">Thank you for applying for a <strong>${body.assetType}</strong> with Ceylon Credit. We have successfully received your application.</p>
            <div style="background: #fffbee; border-left: 4px solid #D4AF37; padding: 16px; border-radius: 4px; margin: 24px 0;">
              <p style="margin: 0 0 8px; color: #b8892a;"><strong>Your Application Summary</strong></p>
              <p style="margin: 4px 0; color: #555;">📅 Date: <strong>${body.preferredDate}</strong></p>
              <p style="margin: 4px 0; color: #555;">🕐 Time: <strong>${body.preferredTime}</strong></p>
              <p style="margin: 4px 0; color: #555;">📍 Location: <strong>${body.location}</strong></p>
            </div>
            <p style="color: #444; line-height: 1.6;">Our team will contact you the same day to proceed with your application.</p>
            <p style="margin-top: 32px; color: #444;">Best Regards,<br/><strong>Ceylon Credit Team</strong></p>
          </div>
          <div style="background: #f7f9fc; padding: 16px 32px; text-align: center; color: #999; font-size: 12px;">
            © 2024 Ceylon Credit. All rights reserved.
          </div>
        </div>
      `
    });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error: any) {
    console.error('❌ Ceylon Credit Booking API Error:', error);
    return NextResponse.json({ error: 'Failed to create application', details: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const bookings = await CreditBooking.find().sort({ createdAt: -1 });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
