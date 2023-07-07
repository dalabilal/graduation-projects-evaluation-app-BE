import mongoose, { Schema, Document } from 'mongoose';

export interface IName extends Document {
    Myname : String[];
}

const StudentSchema = new Schema({
    Myname: { type: [String], required: true },
  });
  

  const StudentsName = mongoose.model<IName>('studentsName', StudentSchema);

export default StudentsName;
