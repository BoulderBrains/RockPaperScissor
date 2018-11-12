// 	- User chooses Rock, Paper or Scissors 
// - Computer randomly selects rock paper or scissors
// - comparing user input with computer random option returns result (win++, tie++, loss++)	
var win;
var tie;
var loss;

function calculation() {
	var options = ['rock', 'paper', 'scissors'];
	var computerSelection = options[ Math.floor( Math.random() * options.length )];
	console.log("computer chooses:" + computerSelection);

	// If the user's selection matches the computer's selection, it's a tie
	if (userInput === computerSelection) {
		tie++;
	} else if (userInput === "rock" && computerSelection === "paper") {
		loss++;
	} else if (userInput === "rock" && computerSelection === "scissors") {
		win++;
	} else if (userInput === "paper" && computerSelection === "rock") {
		win++;
	} else if (userInput === "paper" && computerSelection === "scissors") {
		loss++;
	} else if (userInput === "scissors" && computerSelection === "paper") {
		win++;
	} else if (userInput === "scissors" && computerSelection === "rock") {
		loss++;
	}
	
	twoOuttaThree();
}

function usersChoice() {
	var rock = document.getElementById('rock');
	var paper = document.getElementById('paper');
	var scissors = document.getElementById('scissors');
	console.log("users selection:" + this.userInput);
		
	if (rock) {
		userInput = "rock";
	} else if (paper) {
		userInput = "paper";
	} else if (scissors) {
		userInput = "scissor";
	}
	calculation();
};

// working on a best 2 out of 3 function here
function twoOuttaThree() {
	if (win === 2) {
		console.log("You've won, 2 out of 3 games.");
		win = 0;
		tie = 0;
		loss = 0;
	}
}