import mongoose, { Schema } from 'mongoose';

const PartnerSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  currentLoad: { type: Number, default: 0 },
  areas: [String],
  shift: {
    start: String,
    end: String
  },
  metrics: {
    rating: Number,
    completedOrders: Number,
    cancelledOrders: Number
  }
}, { timestamps: true });

export default mongoose.models.Partner || mongoose.model("Partner", PartnerSchema);
