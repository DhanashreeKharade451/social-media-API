import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'

// MongoDB URI
const connectionString = process.env.Mongo_URI

// Create MongoClient
const client = new MongoClient(connectionString)

//create a instance of the client for initial connection
const app = express()


// GET route
app.get("/", async(req, res) => {
    try{
    // Try connecting to DB
    await client.connect();

    res.json({
         message: "Successfully connected to the database!"
    });
//verify connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Connected successfully to MongoDB!");

}catch(error){
    console.error(error);

    res.status(500).json({
        message:"Failed to connect to database."
    });
}finally {
    // Ensures that the client will close when you finish/error
   
    await client.close();
  }
})



  run().catch(console.dir);


//Define a port (e.g., 3001).

const port = 3001
app.listen(port,() => {
    console.log("Listening to port",+port)
})