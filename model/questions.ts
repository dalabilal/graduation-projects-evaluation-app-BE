// quiz.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  id: number;
  question: string;
  options: string[];
  type: string;
  class: string;
  weight: number;
}

const QuestionSchema: Schema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  type: { type: String, required: true },
  class: { type: String, required: true },
  weight: { type: Number, required: true },
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);
