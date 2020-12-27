import React, {useEffect} from 'react';
import styles from './Game.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	callApi,
	selectApi
} from '../../reducers/apiSlice';

const History = () => {	
	
	const dispatch = useDispatch();
	const {loading, logs} = useSelector(selectApi);
	
	useEffect(() => {
		dispatch(callApi({
				operationId: 'getLogs',
				output: 'logs'
		}));
	},[dispatch]);	
	
	return(
		<>
			<h2>Action Log</h2>
			{loading && <div>Loading...</div>}
			{!loading && logs && logs.length === 0 && <div>No log found.</div>}
			{!loading && logs && logs.length > 0 && <div>
      <table className={styles.table}>
        <thead>
          <tr>
						<th>Step No.</th>
						<th>Player</th>
						<th>Box No.</th>
					</tr>
				</thead>
					<tbody>					
						{logs && logs.map((l, i) => {
							return (
								<tr key={i}>								
									<td>{l.stepNumber}</td>
									<td>{l.name}</td>
									<td>{l.boxNumber}</td>
								</tr>
								)
						})}
					</tbody>
				</table>
			</div>}
		</>  
	)
}

export default History;