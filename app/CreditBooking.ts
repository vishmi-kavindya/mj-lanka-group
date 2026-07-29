// @ts-ignore: Ignore missing mongoose type declarations during build
import mongoose, { Schema, models } from 'mongoose';

// Collection: 'creditbookings'  (Ceylon Credit → inside mj-lanka database)
const CreditBookingSchema = new Schema({
  fullName: String,
  phone: String,
  email: String,
  location: String,
  assetType: String,
  preferredDate: String,
  preferredTime: String,
  notes: String,
  source: { type: String, default: 'ceylon-credit' },
}, { timestamps: true, collection: 'creditbookings' });

const CreditBooking = models.CreditBooking || mongoose.model('CreditBooking', CreditBookingSchema, 'creditbookings');
export default CreditBooking;
