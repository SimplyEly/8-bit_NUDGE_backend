// const express = require("express");
import express from "express";
import cors from "cors";

import { getQuestions, getAQuestion, tenRandomQuestions, tenTopicQuestions } from "./controllers/math_questions.js";

const app = express();

app.use(cors({}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get at route /math_questions
// to res entire array of questions from ../data/math_questions.json

app.get("/math_questions", async function (req, res) {
  const Questions = await tenRandomQuestions();
  res.send(Questions);
});


// the following three functions handle get requests for topic buttons
app.get("/geometry_questions", async function (req, res) {
  const Questions = await tenTopicQuestions("Geometry");
  res.send(Questions);
});

app.get("/algebra_questions", async function (req, res) {
  const Questions = await tenTopicQuestions("Algebra");
  res.send(Questions);
});

app.get("/statistics_questions", async function (req, res) {
  const Questions = await tenTopicQuestions("Statistics");
  res.send(Questions);
});

app.get("/surprise_questions", async function (req, res) {
  const randomIndex = Math.floor(Math.random() * 3);
  const topics = ["Statistics", "Geometry", "Algebra"]; 
  const randomTopic = topics[randomIndex]
  const Questions = await tenTopicQuestions(randomTopic);
  res.send(Questions);
});



// const Questions = await tenRandomQuestions();
// res.send(Questions);
// });

app.get("/daily_question", async function (req, res) {
  const Question = await getAQuestion();
  res.send(Question);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
