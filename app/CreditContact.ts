import mongoose from 'mongoose';

// Collection: 'creditcontacts'  (Ceylon Credit → inside mj-lanka database)
const CreditContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  service: String,
  message: String,
  source: { type: String, default: 'ceylon-credit' },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'creditcontacts' });

export default mongoose.models.CreditContact || mongoose.model('CreditContact', CreditContactSchema, 'creditcontacts');
