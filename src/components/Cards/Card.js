import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { pokemon, handleCardClick } = props;
  return (
    <CardWrapper onClick={(e) => handleCardClick(e, pokemon.name)}>
      <ImgWrapper src={pokemon.image}></ImgWrapper>
      <TitleWrapper>{pokemon.name}</TitleWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  box-sizing: border-box;
  font-size: 25px;
  padding: 0.7rem;
  transition: 300ms;
  max-width: 200px;
  height: 250px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
  padding: 15px;
  cursor: pointer;
  position: relative;
  @include flex-center;
  flex-direction: column;

  &:hover {
    transform: scale(1.07);
  }

  &:active {
    background: rgba(255, 255, 255, 0.4);
    transition: 400ms;
  }
`;

const ImgWrapper = styled.img`
  padding: 1rem;
  margin-left: 1rem;
  width: 150px;
`;

const TitleWrapper = styled.p`
  padding: 0.5rem;
  font-size: 1.6rem;
  font-family: 'Staatliches', Arial;
  font-weight: 560;
  color: yellow;
  text-shadow: 2px 2px 10px black;
  text-align: center;
`;
