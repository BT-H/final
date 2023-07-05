require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.ATLAS_URI;
const path = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5050;
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes.cjs");

// Load the /api routes
app.use("/api", routes);

// Serve the static files from the React build
app.use(express.static(path.join(__dirname, "./client/src")));

// Serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
