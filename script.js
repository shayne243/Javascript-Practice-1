var arr = ["Rock", "Paper", "Scissors"];
function computerPlay() {
    var num = 0;
    num = Math.floor(Math.random() * (arr.length + 1));
    return arr[num];
}
function playRound(player, computer) {
    console.log(player);
    console.log('\n' + computer);
    if (player.toUpperCase() === computer.toUpperCase()) {
        return "It is a draw! " + player + " does not defeat " + computer;
    }
    if (player.toUpperCase() === arr[0].toUpperCase()) {
        if (computer.toUpperCase === arr[1].toUpperCase) {
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            return "You Win! " + player + " defeats " + computer;   
        }
    }
    else if (player.toUpperCase() === arr[1].toUpperCase()) {
        if (computer.toUpperCase === arr[2].toUpperCase) {
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            return "You Win! " + player + " defeats " + computer;   
        }
    }
    else {
        if (computer.toUpperCase === arr[0].toUpperCase) {
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            return "You Win! " + player + " defeats " + computer;   
        }
    }
}
var computerSelection = computerPlay();
var playerSelection = prompt("What is your choice?");
console.log(playerSelection);
alert(playRound(playerSelection, computerSelection));

