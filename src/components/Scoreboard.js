import React from 'react';
import styled from 'styled-components';

const Scoreboard = (props) => {
  return(
    <ScoreboardWrapper>
      <ScoreWrapper>
        Current score: 50
      </ScoreWrapper>
      <ScoreWrapper>
        Best score: 50
      </ScoreWrapper>
    </ScoreboardWrapper>
  )
}

export default Scoreboard;

const ScoreboardWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  margin: 3rem 0 3rem 0;
  font-family: 'Staatliches', Arial;
  word-spacing: 5px
`

const ScoreWrapper = styled.div`
  border: solid 2px;
  // display: flex;
  font-size: 25px;
  padding: 0.5rem;
  box-shadow: -5px -5px 15px 5px #e83d3a, 5px 5px 15px 5px #4287ff;
`
