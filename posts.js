import express from "express";
import db from "./conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a single post
router.get("/", async (req, res) => {
  let collection = await db.collection("CollectionName");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await getDB().collection("CollectionName");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;
