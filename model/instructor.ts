import mongoose, { Schema, Document } from 'mongoose';

export interface IInstructor extends Document {
  id: string;
  name: string;
  email: string;
}

const instructorSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Instructor = mongoose.model<IInstructor>('Instructor', instructorSchema);

export default Instructor;
