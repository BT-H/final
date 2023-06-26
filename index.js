const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const path = require("path");

const uri =
  "mongodb+srv://admin:admin@cluster0.n74ib5e.mongodb.net/?retryWrites=true&w=majority";
const dbName = "DBName";

const app = express();

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to the database");
    return client.db(dbName);
  } catch (error) {
    console.error("Failed to connect to the database");
    throw error;
  }
}

// Create user account
app.post("/account/create", async function (req, res) {
  const { name, email, password } = req.body;

  try {
    const db = await connectToMongoDB();
    const result = await db.collection("CollectionName").insertOne({
      name,
      email,
      password,
    });
    console.log("User Account Created");
    res.json(result.ops[0]);
  } catch (error) {
    console.error("Failed to Create User Account");
    res.status(500).json({ error: "Failed to create user account" });
  }
});

// Login user
app.post("/account/login", function (req, res) {
  const { email, password } = req.body;
  res.json({ email, password });
});

// Get all accounts
app.get("/account/all", function (req, res) {
  res.json([
    {
      name: "Peter",
      email: "peter@mit.edu",
      password: "secret",
    },
  ]);
});

(async () => {
  try {
    await connectToMongoDB();
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server Running on Port ${port}`);
    });
  } catch (error) {
    console.log("Failed to Start the Server");
  }
})();

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "public")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(
      "This is the backend server. Please access the frontend in production mode."
    );
  });
}
