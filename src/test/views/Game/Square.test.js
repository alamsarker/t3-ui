import React from 'react';
import { render } from '@testing-library/react';
import Square from '../../../views/Game/Square';

test('Should render the value X', () => {
  const { getByText } = render(
    <Square value="X" onClick={() => {}} />      
  );

  expect(getByText(/X/i)).toBeInTheDocument();
});
