import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Booking from '../../../models/Booking';
import { transporter } from '@/lib/nodemailer'; // අලුතින් ගෙනාපු එක

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json(); // මේක අනිවාර්යයෙන් තියෙන්න ඕනේ

    const newBooking = await Booking.create(body);

    // Email යවන කොටස
    // Email එක යවන කොටස
await transporter.sendMail({
  from: '"Website Booking" <vishmikavindya722@gmail.com>',
  to: 'vishmikavindya722@gmail.com',
  subject: 'New Booking Received!',
  text: `
    New Booking Details:
    --------------------
    Name: ${body.fullName}
    Phone: ${body.phone}
    Email: ${body.email}
    Location: ${body.location}
    Asset Type: ${body.assetType}
    Date: ${body.preferredDate}
    Time: ${body.preferredTime}
    Notes: ${body.notes || "No notes"}
    
    --------------------
    This is an automated notification from your website.
  `
});

// පාරිභෝගිකයාට ඉමේල් එකක් යැවීම
await transporter.sendMail({
  from: '"Motor Valuation Team" <vishmikavindya722@gmail.com>', // ඔයාගේ නම
  to: body.email, // පාරිභෝගිකයාගේ ඉමේල් එක
  subject: 'Booking Confirmation - Valuation Service',
  text: `Dear ${body.fullName},

Thank you for your booking! 
We have received your request for a ${body.assetType} valuation.
Our team will contact you shortly to confirm the details.

Best Regards,
Valuation Team`
});

    return NextResponse.json(newBooking, { status: 201 });
 } catch (error: any) {
  console.error("Backend Error:", error);
  // මෙතනදී error එකේ තියෙන විස්තරයත් එක්කම ආපහු යවන්න
  return NextResponse.json({ 
    error: "Failed to create", 
    details: error.message 
  }, { status: 500 });
}
}
export async function GET() {
  try {
    await connectToDatabase();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
