var turnX = false;
var move = 1;
var play = true;
// Your code here
$(function() {
  $('td').click(function(){
  // setClass($(this));

  if ($(this).html()=="" && play) {
    if ((move%2)==1||move==1) {
       $(this).addClass('X')
       $(this).html('X')
     }
    else if(move%2==0) {
      $(this).addClass('O')
      $(this).html('O')
    }
    move++;
  }
  // Checking if anyone won
  if (checkForWinner()=="X") { play = false; $('.playerTurn').html("X wins")  }
    else if(checkForWinner()=="O"){ play = false; $('.playerTurn').html("O wins") }

})
    // resetting board
  $('#reset').click(function(){
    clearBoard()
  })
});
// clearing board
function clearBoard(){
  $('td').removeClass('O X').html('')
  $('.playerTurn').html("It is X's turn")
  turnX = false;
  play = true;
  move=1;
}
function checkForWinner(){
  var space1 = $("#0").html();
  var space2 = $("#1").html();
  var space3 = $("#2").html();
  var space4 = $("#3").html();
  var space5 = $("#4").html();
  var space6 = $("#5").html();
  var space7 = $("#6").html();
  var space8 = $("#7").html();
  var space9 = $("#8").html();
  // check rows
  if      ((space1==space2) && (space2==space3)) { return space3; }
  else if ((space4==space5) && (space5==space6)) { return space6; }
  else if ((space7==space8) && (space8==space9)) { return space9; }
  // check columns
  else if ((space1==space4) && (space4==space7)) { return space7; }
  else if ((space2==space5) && (space5==space8)) { return space8; }
  else if ((space3==space6) && (space6==space9)) { return space9; }
  // check diagonals
  else if ((space1==space5) && (space5==space9)) { return space9; }
  else if ((space3==space5) && (space5==space7)) { return space7; }

}
