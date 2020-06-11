var arr = ["Rock", "Paper", "Scissors"];
var system = 0;
var user = 0;
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
            system++;
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            user++;
            return "You Win! " + player + " defeats " + computer;   
        }
    }
    else if (player.toUpperCase() === arr[1].toUpperCase()) {
        if (computer.toUpperCase === arr[2].toUpperCase) {
            system++;
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            user++;
            return "You Win! " + player + " defeats " + computer;   
        }
    }
    else {
        if (computer.toUpperCase === arr[0].toUpperCase) {
            system++;
            return "You Lose! " + computer + " defeats " + player;
        }
        else {
            user++;
            return "You Win! " + player + " defeats " + computer;   
        }
    }
}
var computerSelection;
var playerSelection;
function game() {
    var string = "";
    for (var i = 0; i < 5; ++i) {
        computerSelection = computerPlay();
        playerSelection = prompt("What is your choice?");
        console.log(playRound(playerSelection, computerSelection));
    }
    if (system > user) {
        string = ("You Lose! " + system + "-" + user);
    }
    else if (system == user) {
        string = ("Draw!" + system + "-" + user);
    }
    else {
        string = ("You Win!" + user + "-" + system);
    }
    return string;
}
var winner = game();
alert(winner);
console.log(playerSelection);



