// turnswitcher();
var playerTurn;

var counter=0;
function counter1(){
  if (counter%2==0) {
  playerTurn="X"
  counter++;
} else {
  playerTurn="O"
  counter++;
}
}
var checkable = document.getElementsByTagName('td')
for (var i = 0; i < checkable.length; i++) {
  checkable[i].addEventListener('click', function(event){
    // checkable[i] = 'X';

      let target = event.target;
      counter1();
      target.innerHTML = playerTurn;


  })
  }







//check
//win conditions are
//v 012,
//v 345
//v 678

//h 036
//h 147
//h 258

//d 048
//d 246
