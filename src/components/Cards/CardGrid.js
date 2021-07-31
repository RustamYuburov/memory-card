import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardGrid = (props) => {
  const { pokemons, handleCardClick } = props;
  const pokemonCards = pokemons.map(pokemon => (
    <Card key={pokemon.id} pokemon={pokemon} handleCardClick={handleCardClick} />
  ))
  return(
    <CardGridWrapper>
      {pokemonCards}
    </CardGridWrapper>
  )
}

export default CardGrid;

const CardGridWrapper = styled.div`
  width: 60%;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`