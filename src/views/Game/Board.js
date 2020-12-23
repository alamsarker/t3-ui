import React from 'react';
import chunk from 'lodash/chunk';
import styles from './Game.module.css';
import { useSelector } from 'react-redux';
import Square from './Square'
import {
	selectGame,
} from '../../reducers/gameSlice';

const Board = ({ onClick }) => {
	const game = useSelector(selectGame);
	return (
		<div className={styles.board}>
			{chunk(game.board, 3).map( (items, i) => {
				return (
					<div key={i} className={styles.row}>
						{items.map( (v, j) => <Square key={ i * 3 + j}  value={v} onClick={() => onClick(i * 3 + j) } />  )}
					</div>
				);
			})}
		</div>
	);
}

export default Board;