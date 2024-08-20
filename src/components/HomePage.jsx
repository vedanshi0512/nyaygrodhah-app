import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const HomePage = () => (
  <HomePageContainer>
    <h2>Welcome to the Navigation App</h2>
    <Link to="/login-page">Login</Link>
  </HomePageContainer>
);

export default HomePage;
