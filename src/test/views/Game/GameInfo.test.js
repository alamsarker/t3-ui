import React from 'react';
import { render } from '@testing-library/react';
import GameInfo from '../../../views/Game/GameInfo';
import { Provider } from 'react-redux';
import store from '../../../reducers/store';
import {    
  setResult
} from  '../../../reducers/gameSlice';

test('Render GameInfo component with the title', () => {
  store.dispatch(setResult({
    xIsNext: true
  }));
  const { getByText } = render(
    <Provider store={store}>
      <GameInfo />  
    </Provider>
  );

  expect(getByText(/Tic Tac Toe/i)).toBeInTheDocument();
  expect(getByText(/Next Player: X/i)).toBeInTheDocument();
});

test('Winner should be X', () => {  
  store.dispatch(setResult({
    result: 'Winner is X'
  }));
  const { getByText } = render(
    <Provider store={store}>
      <GameInfo />  
    </Provider>
  );

  expect(getByText(/Winner is X/i)).toBeInTheDocument();  
});

test('Winner should be O', () => {
  store.dispatch(setResult({
    result: 'Winner is O',    
  }));

  const { getByText } = render(
    <Provider store={store}>
      <GameInfo />  
    </Provider>
  );

  expect(getByText(/Winner is O/i)).toBeInTheDocument();  
});