import React from 'react';
import styles from '../../views/Game/Game.module.css';

const Square = ({
	boxNumber,
	value,
	onClick
}) => {
	return (
		<span
			id={`nw-box-${boxNumber}`}
			className={styles.square}
			onClick={onClick}
		>{value}</span> 
	)
}

export default Square;