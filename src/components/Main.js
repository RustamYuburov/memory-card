import React, { useState, useEffect } from 'react';
import Scoreboard from './Scoreboard';
import CardGrid from './Cards/CardGrid';
import styled from 'styled-components';
import background from '../assets/background-img.png';

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      setPokemons(shuffleArray(await fetchPokemons(12)));
      setIsLoading(false);
    };

    loadCards();
  }, []);

  const fetchPokemons = async (amount) => {
    const pokemons = [];

    for (let i = 1; i <= amount; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(url);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }

    return pokemons;
  };

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setCurrentScore(newScore);
      if (bestScore === 12) {
        alert("You've won the game! Grats!!");
        resetGame();
      }
      setClickedPokemons((prevState) => [...prevState, pokemonName]);
    }
  };

  const handleClick = (e, pokemonName) => {
    e.preventDefault();
    playRound(pokemonName);
    setPokemons(shuffleArray(pokemons));
  };

  const resetGame = () => {
    setClickedPokemons([]);
    setCurrentScore(0);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  return (
    <MainWrapper>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      {isLoading ? (
        <h1>Loading Pokemons...</h1>
      ) : (
        <CardGrid pokemons={pokemons} handleCardClick={handleClick} />
      )}
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  border: 1px solid #000;
  background-image: url(${background});
  width: 100%;
  height: 1050px;
  font-family: 'Staatliches', Arial;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
