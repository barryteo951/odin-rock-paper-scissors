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

    return humanChoice;
}



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