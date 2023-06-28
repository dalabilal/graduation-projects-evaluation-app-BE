import express from 'express'
import dotenv from "dotenv"
import { instructorsRouter, quizRouter, studentsRouter } from './routers';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
const MONGO_URL = 'mongodb://localhost:27017/evaluation-app';
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/instructors', instructorsRouter);
app.use('/students', studentsRouter);
app.use('/questions', quizRouter);
// app.use('/users', userRouter);


const port = 3002;

app.listen(port, () =>
    console.log(`server running on port ${port}`)
);