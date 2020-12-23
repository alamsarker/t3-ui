import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: Array(9).fill(''),
  xIsNext: true,    
  result: ''
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {    
    setResult: (state, action) => {
      return {
        ...state,
        result: action.payload.result
      };
    },
    nextMove: (state, action) => {
      return {
        ...state,        
        board: action.payload.board,
        xIsNext: action.payload.xIsNext
      };
    }
  },
});

export const { reset, setResult, nextMove } = gameSlice.actions;
export const selectGame = state => state.game;
export default gameSlice.reducer;
