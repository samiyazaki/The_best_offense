var gameOptions = ["R", "P", "S"]; 

var playGame = function() {
    var playerChoice = window.prompt("Pick R, P, or S:");

if (!playerChoice) {
    return; 
}

playerChoice = playerChoice.toLowerCase(); 


var index = Math.floor(Math.random() * gameOptions.length); 
var computerChoice = gameOptions[index]; 

window.alert("The computer picked " + computerChoice)

if (playerChoice === computerChoice) {
    ties++; 
    window.alert("It's a tie! Try again."); 
}

else if (
    (playerChoice === "R" && computerChoice === "S") ||
    (playerChoice === "P" && computerChoice === "R") ||
    (playerChoice === "S" && computerChoice === "P") 

window.alert(
   "Scoreboard:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties 
);

var replay = window.confirm("Would You Like To Play Again?"); 
if(losses > 3) {
    return;
}

}; 

playGame (); 