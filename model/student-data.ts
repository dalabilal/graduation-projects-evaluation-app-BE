import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IData extends Document {
  group: ObjectId,
  studentName : string ,
  value : string,
  weightSum : number
}

const StudentDataSchema = new Schema({
  group: {type: Schema.Types.ObjectId },
  studentName : {type: String },
  value : {type: String },
  weightSum : {type : Number}
  });
  

  const StudentsData = mongoose.model<IData>('studentData', StudentDataSchema);

export default StudentsData;
