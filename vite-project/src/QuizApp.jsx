import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correct: "Jupiter",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Quiz App</h1>

      {finished ? (
        <h2>Your Score: {score} / {questions.length}</h2>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{ display: "block", margin: "10px auto", padding: "10px" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizApp;