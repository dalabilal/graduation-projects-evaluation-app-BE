import mongoose, { Schema, Document } from 'mongoose';
import { IStudent } from './student';
import { IInstructor } from './instructor';

export interface IGroups extends Document {
    id: string,
    groupName: string,
    student: IStudent[],
    instructor: IInstructor
}

const GroupsSchema = new Schema({
    id: { type: String, required: true },
    groupName: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, required: false }],
    instructor: { type: Schema.Types.ObjectId, required: false }
  });
  

const Groups = mongoose.model<IGroups>('Groups', GroupsSchema);

export default Groups;
