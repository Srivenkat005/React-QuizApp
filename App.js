import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import GlobalStyle from './GlobalStyle';

const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Mark Twain'],
    answer: 'William Shakespeare'
  }
  // Add more questions here
];

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const AppCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (showResult && score === quizQuestions.length) {
      setConfetti(true);
    }
  }, [showResult, score]);

  const handleAnswer = (answer) => {
    if (answer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {confetti && <Confetti />}
        <AppCard>
          <Title>Quiz Game</Title>
          {showResult ? (
            <Result score={score} total={quizQuestions.length} />
          ) : (
            <Quiz
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
          )}
        </AppCard>
      </AppContainer>
    </>
  );
};

export default App;
