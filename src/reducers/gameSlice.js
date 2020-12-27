import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: Array(9).fill(''),
  xIsNext: true,    
  result: '',
  stepNumber: 1
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {    
    setResult: (state, {payload}) => {
      return {
        ...state,
        result: payload.result
      };
    },
    nextMove: (state, {payload}) => {
      return {
        ...state,        
        board: payload.board,
        xIsNext: payload.xIsNext,
        stepNumber: payload.stepNumber,
      };
    }
  },
});

export const { reset, setResult, nextMove } = gameSlice.actions;
export const selectGame = state => state.game;
export default gameSlice.reducer;
