import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const EndJourneyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const EndJourneyPage = () => {
  const navigate = useNavigate();

  const handleEndJourney = () => {
    // Logic to handle ending the journey
    navigate('/');
  };

  return (
    <EndJourneyPageContainer>
      <h2>Journey Ended</h2>
      <button onClick={handleEndJourney}>Return to Home</button>
    </EndJourneyPageContainer>
  );
};

export default EndJourneyPage;
