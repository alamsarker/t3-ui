import React from 'react';
import styles from '../../views/Game/Game.module.css';

const Square = ({
	value,
	onClick
}) => {
	return (
		<span
			className={styles.square}
			onClick={onClick}
		>{value}</span> 
	)
}

export default Square;