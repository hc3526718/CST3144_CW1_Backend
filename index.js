/* SERVER CODE: index.js */
// import dependencies
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

// load environment variables from .env file
dotenv.config();

/* EXPRESS SETUP */
// express app and constants
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017";

/* MONGODB SETUP */
// connect to mongodb and get collections
const client = new MongoClient(MONGO_URL);
await client.connect();
const db = client.db("lessonDB");

/* START SERVER */
// start express server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
