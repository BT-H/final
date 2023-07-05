import express from "express";
import db from "./conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a single post
router.get("/latest", async (req, res) => {
  let collection = await db.collection("posts");
  let results = await collection
    .aggregate([
      { $project: { author: 1, title: 1, tags: 1, date: 1 } },
      { $sort: { date: -1 } },
      { $limit: 3 },
    ])
    .toArray();
  res.send(results).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("posts");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;
