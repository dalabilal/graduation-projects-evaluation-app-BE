import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  id: number;
  question: string;
  options: string[];
  type: string;
  Class: string;
  weight: number;
  marks: number[]; // Add the 'marks' field
}

const QuestionSchema: Schema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  type: { type: String, required: true },
  Class: { type: String, required: true },
  weight: { type: Number, required: true },
  marks: { type: [Number], required: true }, // Add the 'marks' field
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);
