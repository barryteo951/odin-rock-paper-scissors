// REQUIREMENTS
// [OK] For now, remove the logic that plays exactly five rounds. 
// [OK] Create three buttons, one for each selection. [DONE]
    // Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step) 
// [OK] Add a div for displaying results and change all of your console.logs into DOM methods. 
// [OK] Display the running score, and announce a winner of the game once one player reaches 5 points. 
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.



const buttons = document.querySelectorAll("button");
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



function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 
    let humanChoice = "";
    let computerChoice = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.className;
            playRound(humanChoice);
        });
    }); 
    


    function playRound(humanChoice) {
        computerChoice = getComputerChoice();

        if (humanChoice == computerChoice) {
            divMessage.textContent = "Draw!";
        } else if ((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="scissors" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="rock")) {           
            divMessage.textContent = "Win!";
            humanScore++;
        } else {
            divMessage.textContent = "Lose!";
            computerScore++;
        }

        divHumanScore.textContent = humanScore;
        divComputerScore.textContent = computerScore;

        checkWinner(humanScore, computerScore);
        }
    }


function checkWinner(humanScore, computerScore) {
    if (humanScore >= 5) { 
        divMessage.textContent = "YOU WIN, CONGRATS!";
        return;
    }
    else if (computerScore >= 5) {
        divMessage.textContent = "YOU LOSE. TRY AGAIN..";
        return;
    }
}  