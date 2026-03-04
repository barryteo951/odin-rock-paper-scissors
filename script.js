// 1. set-up the project structure
// check if js is linked correctly
 
// console.log("Hello World")



// 2. get the computer choice
// write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a function named getComputerChoice.
// getComputerChoice should randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Note: Arrays are not necessary for this problem
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);  
    let computerChoice;

    switch (randomNumber) {
        case 0: 
            computerChoice = "rock";
            break;
        case 1: 
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
    }
    
    // console.log("The random number in getter method : " + randomNumber);
    // console.log("The computer choice in getter method : " + computerChoice);
    return computerChoice;
}



// 3. get the human choice 
// write a function that takes the user choice and returns it.

// Create a function named getHumanChoice.
// getHumanChoice should return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
// Test what your function returns by using console.log.

// getHumanChoice();

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();

    switch (humanChoice) {
        case "rock": 
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        default: 
            alert("Invalid prompt");
            break;
    }

    // console.log("The human choice in getter method : " + humanChoice);
    return humanChoice;
}



// 4. declare the players score variables
// write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

// move into playgame function
// let humanScore = 0; 
// let computerScore = 0; 



// 5. play a single round
// write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

// move into playgame function
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == computerChoice) {
//         console.log("Draw!");
//     } else if ((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")) {           
//         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//         humanScore++;
//     } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         computerScore++;
//     }
// }



// Step 6: play the entire game
// write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

playGame();

function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 

    while(humanScore<5 && computerScore<5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Draw!");
        } else if ((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")) {           
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        console.log("You: " + humanScore + "   Bot: " + computerScore);
    }
}