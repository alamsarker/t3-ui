import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../reducers/store';
import App from '../App';

test('render game title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Tic Tac Toe/i)).toBeInTheDocument();
});
