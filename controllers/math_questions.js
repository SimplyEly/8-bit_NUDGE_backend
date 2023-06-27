import fs from "node:fs/promises";

const filename = "./data/math_questions.json";

export async function getQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  return questions;
}

export async function getAQuestion() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  const i = Math.floor(Math.random() * questions.length);
  const question = questions[i];
  return question;
}

export async function tenRandomQuestions() {
  const data = await fs.readFile(filename);
  const tenRandomQuestions = [];
  for(let i = 0; i < 3; i++) {
    const questions = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    console.log(randomQuestion);
    tenRandomQuestions.push(randomQuestion);
    console.log(tenRandomQuestions);
  }
  return tenRandomQuestions;
}

export async function geometryQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  const geometryQuestions = questions.filter(question => question.topic === "Geometry");
  return geometryQuestions;
}

export async function algebraQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  const algebraQuestions = questions.filter(question => question.topic === "Algebra");
  return algebraQuestions;
}

export async function trigQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  const trigQuestions = questions.filter(question => question.topic === "Trigonometry");
  return trigQuestions;
}