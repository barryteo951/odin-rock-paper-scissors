// REQUIREMENTS
// For now, remove the logic that plays exactly five rounds. [DONE]
// Create three buttons, one for each selection. [DONE]
    // Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step) [DONE]
// Add a div for displaying results and change all of your console.logs into DOM methods. [DONE]
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

// 

// BRAINSTORMING
// 1. When user clicks button, that's a human choice. 
// 2. The computer makes choice, that's a computer choice. 
// 3. The winner is decided, and score is updated. 



const buttons = document.querySelectorAll("button");
// const buttonRock = document.querySelector(".buttons .rock");
// const buttonPaper = document.querySelector(".buttons .paper");
// const buttonScissors = document.querySelector(".buttons .scissors");
const divMessage = document.querySelector(".message")
const divHumanScore = document.querySelector(".scores .human");
const divComputerScore = document.querySelector(".scores .computer"); 



playGame();



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
    
    return computerChoice;
}



// function getHumanChoice() {
//     let humanChoice = prompt("Choose rock, paper, or scissors").toLowerCase();

//     switch (humanChoice) {
//         case "rock": 
//             humanChoice = "rock";
//             break;
//         case "paper":
//             humanChoice = "paper";
//             break;
//         case "scissors":
//             humanChoice = "scissors";
//             break;
//         default: 
//             alert("Invalid prompt");
//             break;
//     }

//     return humanChoice;
// }



function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 

    // while (humanScore < 5 && computerScore < 5) {
    // let humanChoice = ""getHumanChoice""();
    let humanChoice = "";
    let computerChoice = "";
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
           humanChoice = button.className;
           playRound(humanChoice);
        });
    }); 
    // buttonRock.addEventListener("click", (event) => {
    //     humanChoice = buttonRock.className;
    //     playRound(humanChoice);
    // }); 
    // buttonPaper.addEventListener("click", (event) => {
    //     humanChoice = buttonPaper.className;
    //     playRound(humanChoice);
    // });
    // buttonScissors.addEventListener("click", (event) => {
    //     humanChoice = buttonScissors.className;
    //     playRound(humanChoice);
    // });
    // }

    

    function playRound(humanChoice) {
        computerChoice = getComputerChoice();

        if (humanChoice == computerChoice) {
            divMessage.textContent = "Draw!";
        } else if ((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")) {           
            divMessage.textContent = "You win!";
            humanScore++;
        } else {
            divMessage.textContent = "You lose!";
            computerScore++;
        }

        divHumanScore.textContent = humanScore;
        divComputerScore.textContent = computerScore;
    }
}