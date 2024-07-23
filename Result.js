import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaSadTear } from 'react-icons/fa';

const ResultContainer = styled.div`
  text-align: center;
`;

const ResultText = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  svg {
    margin-right: 10px;
  }
`;

const MotivationalText = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const Result = ({ score, total }) => {
  const percentage = (score / total) * 100;
  return (
    <ResultContainer>
      {percentage === 100 ? (
        <ResultText><FaTrophy /> Congratulations! You scored: {score} / {total}</ResultText>
      ) : (
        <ResultText><FaSadTear /> Your Score: {score} / {total}</ResultText>
      )}
      {percentage < 50 && (
        <MotivationalText>Don't worry, keep trying! You'll do better next time.</MotivationalText>
      )}
    </ResultContainer>
  );
};

export default Result;
