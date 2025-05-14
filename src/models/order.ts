import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  orderNumber: String,
  customer: {
    name: String,
    phone: String,
    address: String
  },
  area: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  status: {
    type: String,
    enum: ['pending', 'assigned', 'picked', 'delivered'],
    default: 'pending'
  },
  scheduledFor: String, // HH:mm
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partner',
    default: null
  },
  totalAmount: Number
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
