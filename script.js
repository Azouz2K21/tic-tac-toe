const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Check for a win
function checkForWin() {
  // Check rows
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      // Show the horizontal winning line
      document.querySelector(`.winning-line.horizontal.row-${i}`).style.display = 'block';
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      // Show the vertical winning line
      document.querySelector(`.winning-line.vertical.col-${i}`).style.display = 'block';
      return board[0][i];
    }
  }

  // Check diagonals
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    // Show the diagonal winning line
    document.querySelector('.winning-line.diagonal.top-left-bottom-right').style.display = 'block';
    return board[0][0];
  }
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    // Show the diagonal winning line
    document.querySelector('.winning-line.diagonal.top-right-bottom-left').style.display = 'block';
    return board[0][2];
  }

  // Check for a draw
  let emptySquares = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!board[i][j]) {
        emptySquares++;
      }
    }
  }
  if (emptySquares === 0) {
    return 'draw';
  }

  return null;
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    let row = Math.floor(i / 3);
    let col = i % 3;
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      e.target.innerHTML = currentPlayer;
      let winner = checkForWin();
      if (winner) {
        console.log(typeof winner);
        if (winner === 'draw') {
          alert('It\'s a draw!');
        } else if (winner === 'X') {
          alert(winner+ ' wins!');
        } else if (winner === 'O') {
          alert(winner+ ' wins!');
        }
        return; // exit the loop
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
}


const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', function() {
  location.reload();
});

