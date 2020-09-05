//grJX4VVj9ob75ejE

var express = require("express");
var mongoose = require("mongoose");

var data = require("./data.js");
var videos = require("./dbModel");

// import express from "express";
// import mongoose from "mongoose";

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());

// DB config
const connection_url = "mongodb+srv://admin:grJX4VVj9ob75ejE@cluster0.y3fap.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

// API end point
app.get("/", function (req, res) {
  res.status(200).send("Hello World");
});

app.get('/v1/posts', function(req, res) {
    res.status(200).send(data);
    console.log(data);
});

app.post('/v2/posts', function(req, res) {
    const dbVideos = req.body

    videos.create(dbVideos, function(err, data) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(201).send(data)
      }
    })
})

// Listen
// app.listen(port, () => console.log(`listening on localhost: ${port}`));
app.listen(port, function () {
  console.log(`listening on localhost: ${port}`);
});
