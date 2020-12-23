import React from 'react';
import { render } from '@testing-library/react';
import Board from '../../../views/Game/Board';
import { Provider } from 'react-redux';
import store from '../../../reducers/store';
import {    
  nextMove
} from '../../../reducers/gameSlice';

test('Render Board component with all X', () => {
  store.dispatch(nextMove({
    board: ["X","X","X","X","X","X","X","X","X"]
  }));
  const {getAllByText} = render(
    <Provider store={store}>
      <Board />  
    </Provider>
  );
  
  const elements =  getAllByText(/X/i);
  elements.forEach(element => {
    expect(element).toBeInTheDocument();
  });
  
});