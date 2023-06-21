const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/TodoRoutes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Database connection
// const dbURL = process.env.DATABASE;
// const dbURL = "mongodb://localhost:27017/todo-app";
const dbURL = "mongodb://127.0.0.1:27017/todo-app";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");

    // app.get("/", (req, res) => {
    //   res.send("Hello, welcome to the Todo App!");
    // });

    // Use the todoRoutes middleware
    app.use("/todos", todoRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
