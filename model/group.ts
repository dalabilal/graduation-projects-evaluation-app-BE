import mongoose, { Schema, Document } from 'mongoose';
import { IStudent } from './student';
import { IInstructor } from './instructor';

export interface IGroups extends Document {
    id: string,
    name: string,
    student: IStudent[],
    instructor: IInstructor
}

const GroupsSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'IStudent', required: false }],
    instructor: { type: Schema.Types.ObjectId, ref: 'IInstructor', required: false }
  });
  

const Groups = mongoose.model<IGroups>('Groups', GroupsSchema);

export default Groups;
