import React, { useState } from 'react';
import Scoreboard  from './Scoreboard';
import CardGrid from './Cards/CardGrid';
import styled from 'styled-components';
import background from '../assets/background-img.png'

const Main = () => {
  // const POKEMONS_AMOUNT = 12;
  // const [isLoading, setIsLoading] = useState(false);
  // const [pokemons, setPokemons] = useState([]);
  // const [clickedPokemons, setClickedPokemons] = useState([]);
  // const [currentScore, setCurrentScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  return (
    <MainWrapper>
      <Scoreboard />
      <CardGrid />
    </MainWrapper>
  )
}

export default Main;

const MainWrapper = styled.div`
  border: 1px solid #000;
  background-image: url(${background});
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`