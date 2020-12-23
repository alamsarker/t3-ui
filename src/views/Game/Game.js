import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  
  nextMove,
  setResult,
  selectGame,
} from '../../reducers/gameSlice';

import {
  callApi
} from '../../reducers/apiSlice';

import Board from './Board';
import GameInfo from './GameInfo';
import History from './History';
import styles from './Game.module.css';
import {
  findWinner,
  isFull,
  nextPlayer
} from '../../lib/game';

const Game = () => {

  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  const handleClick = (boxNumber) => {

    let {
      board,
      xIsNext,
      result
    } = {
      board: [
        ...game.board
      ],
      xIsNext: game.xIsNext,
      result: game.result
    };

    if(result) {
      return;
    }

    dispatch(callApi({
      operationId: 'addLog',      
      parameters: {
        body: {
          boxNumber,
          gameNumber: 1,
          stepNumber: 1,
          name: nextPlayer(xIsNext)
        }
      }
    }));

    board[boxNumber] = nextPlayer(xIsNext);
    xIsNext = !xIsNext;

    dispatch(nextMove({
      xIsNext,
      board
    }));

    const winner = findWinner(board);
    if( winner || isFull(board)) {
      dispatch(setResult({
        result: winner ? `Winner is: ${winner}` : 'Game over a tie'
      }));
    }    
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <GameInfo/>
      </div>
      <div className={styles.row}>
        <Board onClick = {(i) => handleClick(i) }  />
      </div>
      <div className={styles.row}>
        <History/>
      </div>       
    </div>
  );
}

export default Game;
