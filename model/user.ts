// user.js

import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
  }
// Define the user schema
const userSchema = new Schema({
    id: String,
  name: String,
  email: String,
});


const User = mongoose.model<IUser>('User', userSchema);

export default User;
