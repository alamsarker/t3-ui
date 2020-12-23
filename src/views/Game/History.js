import React, {useEffect} from 'react';
import styles from './Game.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	callApi,
	selectApi
} from '../../reducers/apiSlice';

const History = () => {
	//console.log("Rendaring the component..");
	const {logs} = useSelector(selectApi);
	const dispatch = useDispatch();

	useEffect(() => {
		//console.log("Loading...")
		dispatch(callApi({
				operationId: 'getLogs',
				output: 'logs'
			}));		
	},[dispatch]);

	//console.log("data", logs);

	return(
		<>
			<h2>Action Log</h2>
			<table className={styles.table}>
				<thead>
				<tr>
					<th>Game No.</th>
					<th>Step</th>
					<th>Player</th>
					<th>Chosen Box</th>
				</tr>
				</thead>
				<tbody>
					{ logs && logs.map( (l, i) => {
						return (
							<tr key={i}>
								<td>{l.gameNumber}</td>
								<td>{l.stepNumber}</td>
								<td>{l.name}</td>
								<td>{l.boxNumber}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>  
	)
}

export default History;