// const express = require("express");
import express from "express";
import cors from "cors";

import { getQuestions, getAQuestion, tenRandomQuestions, geometryQuestions, algebraQuestions, statisticsQuestions } from "./controllers/math_questions.js";

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

app.get("/daily_question", async function (req, res) {
  const Question = await getAQuestion();
  res.send(Question);
});

app.get("/math_questions/geometry", async function (req, res) {
  const Questions = await geometryQuestions();
  res.send(Questions);
});

app.get("/math_questions/algebra", async function (req, res) {
  const Questions = await algebraQuestions();
  res.send(Questions);
});

app.get("/math_questions/statistics", async function (req, res) {
  const Questions = await statisticsQuestions();
  res.send(Questions);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
