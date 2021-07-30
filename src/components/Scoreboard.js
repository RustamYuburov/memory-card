import React from 'react';
import styled from 'styled-components';

const Scoreboard = (props) => {
  return(
    <ScoreboardWrapper>
      <ScoreWrapper>
        Current score: {props.currentScore}
      </ScoreWrapper>
      <ScoreWrapper>
        Best score: {props.bestScore}
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
  // border: solid 2px;
  // // display: flex;
  // box-shadow: -5px -5px 15px 5px #e83d3a, 5px 5px 15px 5px #4287ff;
  
  &, & * { box-sizing: border-box; transition: 400ms; }
  font-size: 25px;
  padding: 0.7rem;
  max-width: 300px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
  padding: 15px;
  position: relative;
  @include flex-center;
  flex-direction: column;
}
`
