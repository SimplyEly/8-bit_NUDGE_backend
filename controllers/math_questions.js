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
  const questions = JSON.parse(data);
  for(let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    tenRandomQuestions.push(randomQuestion);
  }
  return tenRandomQuestions;
}

// This handles the question selection for the topic questions. 
// (it's based on tenRandomQuestions, and the two could probably be merged in a refactor
// but I didn't want to mess with working code at this stage (last day of bootcamp 30 Jun 2023))
export async function tenTopicQuestions(subject) {
  const data = await fs.readFile(filename);
  const tenRandomQuestions = [];
  const questions = JSON.parse(data);
  const subjectQuestions = questions.filter((item) => item.topic === subject)
  for(let i = 0; i < 3; i++) {
    //const subjectQuestions = questions; 
    const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
    const randomQuestion = subjectQuestions[randomIndex];
    tenRandomQuestions.push(randomQuestion);
  }
  return tenRandomQuestions;
}