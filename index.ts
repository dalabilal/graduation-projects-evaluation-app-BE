import express from 'express'
import dotenv from "dotenv"
const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Server 🙋🏻‍♀️");
    console.log('GET')
})

const port = process.env.PORT;

app.listen(port, () =>
    console.log(`server running on port ${port}`)
);