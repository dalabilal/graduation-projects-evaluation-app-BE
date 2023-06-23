import express from 'express'
import dotenv from "dotenv"
import { instructors, students } from './routers';
import mongoose from 'mongoose';
const app = express();
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

app.use('/instructors', instructors);
app.use('/students', students);



app.get('/', (req, res) => {
    res.send("Hello Server 🙋🏻‍♀️");
    console.log('GET')
})

const port = 3002;

app.listen(port, () =>
    console.log(`server running on port ${port}`)
);