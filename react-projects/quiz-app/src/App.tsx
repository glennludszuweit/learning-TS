import React from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startQuiz = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>TRIVIA QUIZ</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        question={questions[0].question}
        answers={questions[0].answers}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
