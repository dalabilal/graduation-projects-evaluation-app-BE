import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  id: string;
  name: string;
  email: string;
  major: string;
}

const studentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  major: { type: String, required: true },
});

const Student = mongoose.model<IStudent>('Student', studentSchema);

export default Student;
