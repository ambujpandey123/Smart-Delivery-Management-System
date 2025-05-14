import mongoose, { Schema } from 'mongoose';

const AssignmentSchema = new Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  partnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partner',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['success', 'failed'],
    required: true
  },
  reason: String
});

export default mongoose.models.Assignment || mongoose.model("Assignment", AssignmentSchema);
