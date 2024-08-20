import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src="public\nyagrodhah_logo.jpg" alt="Company Logo" />
    <h1>NYAGRODHAH</h1>
  </HeaderContainer>
);

export default Header;
