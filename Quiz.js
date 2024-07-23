import React from 'react';
import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

const QuizContainer = styled.div`
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  svg {
    margin-right: 10px;
  }
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OptionItem = styled.li`
  cursor: pointer;
  background-color: #e0e0e0;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

const Quiz = ({ question, options, handleAnswer }) => {
  return (
    <QuizContainer>
      <QuestionText><FaQuestionCircle />{question}</QuestionText>
      <OptionsList>
        {options.map((option, index) => (
          <OptionItem key={index} onClick={() => handleAnswer(option)}>
            {option}
          </OptionItem>
        ))}
      </OptionsList>
    </QuizContainer>
  );
};

export default Quiz;
