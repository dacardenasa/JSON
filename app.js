const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const app = express();
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/mongo-1",
  { useNewUrlParser: true }
).catch( error => handleError(error) );

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(3000, () => console.log("Listening on port 3000!"));