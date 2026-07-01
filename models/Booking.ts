// @ts-ignore: Ignore missing mongoose type declarations during build
import mongoose, { Schema, models } from 'mongoose';

const BookingSchema = new Schema({
  fullName: String,
  phone: String,
  email: String,
  location: String,
  assetType: String,
  preferredDate: String,
  preferredTime: String,
  notes: String
}, { timestamps: true });

const Booking = models.Booking || mongoose.model('Booking', BookingSchema);
export default Booking;