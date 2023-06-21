// const express = require("express");
import express from "express";
import cors from "cors";

import { getQuestions, tenQuestions, tenRandomQuestions } from "./controllers/math_questions.js";

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

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
