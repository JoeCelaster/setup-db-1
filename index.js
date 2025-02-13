require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Error connecting to database:", err));

app.get("/", (req, res) => {
  res.send("Customer Management System Backend");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
