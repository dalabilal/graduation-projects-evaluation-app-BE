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
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'GPEA';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err:any) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);

  // You can now perform database operations using the "db" object
  
  // Example: Create a collection and insert a document
  const collection = db.collection('mycollection');
  const document = { name: 'John Doe', age: 30 };
  collection.insertOne(document, function(err:any, result:any) {
    if (err) {
      console.error('Error inserting document:', err);
      return;
    }

    console.log('Document inserted successfully');
  });
});
    client.close(function(err:any) {
    if (err) {
      console.error('Error closing MongoDB connection:', err);
      return;
    }
  
    console.log('MongoDB connection closed');
  });