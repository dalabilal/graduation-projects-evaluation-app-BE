import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  id: number;
  question: string;
  options: string[];
  type: string;
  Class: string;
  weight: number;
}

const QuestionSchema: Schema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  type: { type: String, required: true },
  Class: { type: String, required: true },
  weight: { type: Number, required: true },
});

const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
 export default Question;