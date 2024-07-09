const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://admin:passwordpassword@mangodbcluster.vnjr1qv.mongodb.net/";
mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("mongo instance connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("Error occured while connecting to mongo instance", err);
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
