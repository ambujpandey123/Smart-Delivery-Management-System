import mongoose, { Schema } from 'mongoose';

const NewUser = new Schema({
 name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  address: String,
  isadmin: { type: Boolean, default: true },
  isLoggedIn:{ type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Users || mongoose.model("Users",  NewUser);
