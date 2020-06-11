var arr = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    var num = 0;
    num = Math.floor(Math.random() * (arr.length + 1));
    return arr[num];
}
var playerSelection = prompt("What is your choice?");
var computerSelection = computerPlay();
