const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const progress = document.getElementById("progress");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  totalQuestionSpan.textContent = totalQuestions;
  scoreSpan.textContent = score;
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerContainer.appendChild(button);
  });
}

function resetState() {
  answerContainer.innerHTML = "";
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
    scoreSpan.textContent = score;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  finalScoreSpan.textContent = score;
  maxScoreSpan.textContent = totalQuestions;
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 80) {
    resultMessage.textContent = "Congratulations! You passed the quiz.";
  } else {
    resultMessage.textContent = "Sorry, you did not pass the quiz.";
  }
}

function restartQuiz() {
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
}
