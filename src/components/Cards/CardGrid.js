import React from 'react';
import styled from 'styled-components';

const CardGrid = () => {
  return(
    <CardGridWrapper>
      <h1>Grid of Cards</h1>
    </CardGridWrapper>
  )
}

export default CardGrid;

const CardGridWrapper = styled.div`
  border: solid;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`