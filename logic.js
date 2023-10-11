let players = ['x', 'o'];
let activePlayer = 0;
let items = [];

function startGame (){
  items = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  activePlayer = players[0];
  renderBoard(items);
}
startGame();

function click (col, row){
  items[col][row] = activePlayer;
  renderBoard(items);
  if(activePlayer === 'o'){
    activePlayer = players[0]
  } else {
    activePlayer = players[1]
  }
  
  if ( items[0][0] == "x" && items[0][1] == 'x' && items[0][2] == 'x' ||
      items[1][0] == "x" && items[1][1] == 'x' && items[1][2] == 'x' ||
      items[2][0] == "x" && items[2][1] == 'x' && items[2][2] == 'x' ||
      items[0][0] == "x" && items[1][0] == 'x' && items[2][0] == 'x' ||
      items[0][1] == "x" && items[1][1] == 'x' && items[2][1] == 'x' ||
      items[0][2] == "x" && items[1][2] == 'x' && items[2][2] == 'x' ||
      items[0][0] == "x" && items[1][1] == 'x' && items[2][2] == 'x' ||
      items[2][0] == "x" && items[1][1] == 'x' && items[0][2] == 'x' )
  {
		return showWinner(0)
  }
	if ( items[0][0] == "o" && items[0][1] == 'o' && items[0][2] == 'o' ||
      items[1][0] == "o" && items[1][1] == 'o' && items[1][2] == 'o' ||
      items[2][0] == "o" && items[2][1] == 'o' && items[2][2] == 'o' ||
      items[0][0] == "o" && items[1][0] == 'o' && items[2][0] == 'o' ||
      items[0][1] == "o" && items[1][1] == 'o' && items[2][1] == 'o' ||
      items[0][2] == "o" && items[1][2] == 'o' && items[2][2] == 'o' ||
      items[0][0] == "o" && items[1][1] == 'o' && items[2][2] == 'o' ||
      items[2][0] == "o" && items[1][1] == 'o' && items[0][2] == 'o' )
  {
		return showWinner(1)
  }
  
}
  
click();