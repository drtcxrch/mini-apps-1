// Model

//keeps track of players turn

var playerOnesTurn = true;

//holds state of board

var board = {
  row1: {
    col1: null,
    col2: null,
    col3: null
  },
  row2: {
    col1: null,
    col2: null,
    col3: null
  },
  row3: {
    col1: null,
    col2: null,
    col3: null
  }
}

//updates state of model

var classToKey = function (square, piece) {
  var boardLoc = square.split(' ');
  var row = boardLoc[0];
  var col = boardLoc[1];
  board[row][col] = piece;
}

//clears board in the model

var clearBoardModel = function (board) {

  for (var rows in board) {
    var row = board[rows];
    for (var columns in row) {
      row[columns] = null;
    }
  }

  return board;
}

//checks an individual row, column, or diagonal

var winningConfig = function (streak) {
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < streak.length; i++) {
    if (streak[i] === 'X') {
      xCount += 1;
    } else if (streak[i] === 'O') {
      oCount += 1;
    }
  }

  if (xCount === 3) {
    setTimeout(function () {
      alert('Player1 has won!')
    }, 200);
    return true;
  } else if (oCount === 3) {
    setTimeout(function () {
      alert('Player2 has won!')
    }, 200);
    return true;
  }

  return false;
};

//checks whole board

var checkForWinner = function (board) {
  var rowOne = [board.row1.col1, board.row1.col2, board.row1.col3];
  var rowTwo = [board.row2.col1, board.row2.col2, board.row2.col3];
  var rowThree = [board.row3.col1, board.row3.col2, board.row3.col3];
  var column1 = [board.row1.col1, board.row2.col1, board.row3.col1];
  var column2 = [board.row1.col2, board.row2.col2, board.row3.col2];
  var column3 = [board.row1.col3, board.row2.col3, board.row3.col3];
  var majDiag = [board.row1.col1, board.row2.col2, board.row3.col3];
  var minDiag = [board.row1.col3, board.row2.col2, board.row3.col1];
  var configs = [rowOne, rowTwo, rowThree, column1, column2, column3, majDiag, minDiag];

  for (var i = 0; i < configs.length; i++) {
    if (winningConfig(configs[i])) {
      return clearBoardModel(board);
    }
  }

}

//checks for ties

var isTie = function (board) {
  for (var rows in board) {
    var row = board[rows];
    for (var col in row) {
      if (row[col] === null) {
        return;
      }
    }
  }

  setTimeout(function() {
    alert('It\'s a tie!! Start a new game!!');
  }, 200);
}

//View

var squareIsOccupied = function (square) {
  var boardLoc = square.split(' ');
  var row = boardLoc[0];
  var col = boardLoc[1];
  if (board[row][col] !== null) {
    alert('Square is occupied!!');
    return true;
  }

  return false;
}

var clearBoardView = function () {
  var table = document.getElementsByClassName("table")
  var rows = table[0].children;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].children;
    for (var j = 0; j < row.length; j++) {
      row[j].innerHTML = "";
    }
  }
  clearBoardModel(board);
  playerOnesTurn = true;
}

var addX = function (square) {
  document.getElementsByClassName(square)[0].innerHTML = 'X';
  playerOnesTurn = false;
  classToKey(square, 'X');
}

var addO = function (square) {
  document.getElementsByClassName(square)[0].innerHTML = 'O';
  playerOnesTurn = true;
  classToKey(square, 'O');
}

//Controller

//eventListener for all clicks

document.addEventListener('click', (event) => {
  if (event.target.type === "submit") {
    clearBoardView();
  } else if (!squareIsOccupied(event.target.className)) {
    if (playerOnesTurn) {
      addX(event.target.className);
    } else {
      addO(event.target.className);
    }
    checkForWinner(board);
    isTie(board);
  }
})

