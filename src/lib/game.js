
const EMPTY = '';

const findWinner = (board) => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  const winner = lines.filter(line => {
    const [
      p1,
      p2,
      p3
     ] = line;

    return board[p1]
      && board[p1] === board[p2] 
      && board[p1] === board[p3]
  })[0] || null;   

  if( winner !== null) {    
    return board[winner[0]];
  }

  return null
}

const isFull = (board) => board.findIndex(v => v === EMPTY) === -1;
const nextPlayer = (xIsNext) => xIsNext ? 'X' : 'O';

export {
    findWinner,
    isFull,
    nextPlayer,    
};
