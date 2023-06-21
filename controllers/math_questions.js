import fs from "node:fs/promises";

const filename = "./data/math_questions.json";

export async function getQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  return questions;
}

export async function tenQuestions() {
  const data = await fs.readFile(filename);
  const questions = JSON.parse(data);
  const i = Math.floor(Math.random() * questions.length);
  console.log(i);
  const tenQuestions = questions.slice(i, i + 10);
  console.table(tenQuestions);
  return tenQuestions;
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