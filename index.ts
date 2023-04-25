import express from 'express' 
import dotenv from 'dotenv'
const app =  express() 
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Server 🙋🏻‍♀️");
    console.log('GET')
})

const port = 3001 ;

app.listen(port ,  () => 
    console.log('hello world 🎈')
);
