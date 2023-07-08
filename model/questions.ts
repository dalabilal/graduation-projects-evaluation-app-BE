import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  id: number;
  question: string;
  options: { option: string; weight: number }[];
  type: string;
  Class: string;
}

const QuestionSchema: Schema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [{ option: String, weight: Number }], required: true },
  type: { type: String, required: true },
  Class: { type: String, required: true },
});

const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
export default Question;
