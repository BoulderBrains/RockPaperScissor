// 	- User chooses Rock, Paper or Scissors 
// - Computer randomly selects rock paper or scissors
// - comparing user input with computer random option returns result (win++, tie++, loss++)	
var win = 0;
var tie = 0;
var loss = 0;

function calculation() {
	var options = ['rock', 'paper', 'scissors'];
	var computerInput = options[Math.floor(Math.random()*options.length)];

	// If the user's selection matches the computer's selection, it's a tie
	if (userInput === computerInput) {
		tie++;
		console.log('it was a tie');
	} else if (userInput === "rock" && computerInput === "paper") {
		loss++;
		console.log('it was a loss');
	} else if (userInput === "rock" && computerInput === "scissors") {
		win++;
		console.log('it was a win');
	} else if (userInput === "paper" && computerInput === "rock") {
		win++;
		console.log('it was a win');
	} else if (userInput === "paper" && computerInput === "scissors") {
		loss++;
		console.log('it was a loss');
	} else if (userInput === "scissors" && computerInput === "paper") {
		win++;
		console.log('it was a win');
	} else if (userInput === "scissors" && computerInput === "rock") {
		loss++;
		console.log('it was a loss');
	}
	console.log("tie " + tie);
	console.log("win " + win);
	console.log("loss " + loss);
	twoOuttaThree();
}

function usersChoice() {
	var rock = document.getElementById('rock');
	var paper = document.getElementById('paper');
	var scissors = document.getElementById('scissors');
		
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
	if (this.win = 2) {
		alert("You won!");
		win = 0;
		tie = 0;
		loss = 0;
	}
}