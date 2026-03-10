import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'

const connectionString = process.env.Mongo_URI

const client = new MongoClient(connectionString)

//create a instance of the client for initial connection
const app = express()
