import React from 'react';
import styled from 'styled-components';
import logo from '../assets/pokemon-logo.png'

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Memory Cards with</h1>
      <Logo src={logo} alt='logo'></Logo>
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #e83d3a;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-family: 'Notable', sans-serif;
  color: #fffc40;
  text-shadow: 5px 5px 1px #4287ff;
  border-bottom: solid black;

`
const Logo = styled.img`
  max-width: 300px;
  margin-left: 20px;
`
