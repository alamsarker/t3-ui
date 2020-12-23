import React from 'react';
import { useSelector } from 'react-redux';
import {  
  selectGame,
} from '../../reducers/gameSlice';
import {  
  nextPlayer
} from '../../lib/game';

const GameInfo = () => {
  const game = useSelector(selectGame);
  return(
    <>
      <h2>Tic Tac Toe</h2>
      { !game.result && <div>Next Player: {nextPlayer(game.xIsNext)}</div> }
      { game.result && <div>{game.result}</div> }
    </>
  )
}

export default GameInfo;