console.log("Rock, Paper, Scissors Game")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
// if done with an array const options = ["Rock", "Paper", "Scissors"];

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    while (
        humanChoice !== "rock" &&
        humanChoice !== "paper" &&
        humanChoice !== "scissors" 
    ) {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw! Try again!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    )   {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            break;
        }
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human score: ${humanScore} - ${computerScore} Computer\n`);
    }

    if (humanScore > computerScore) {
        alert(`Final score: You: ${humanScore} | Computer: ${computerScore}. You Win!`);   
    } else if (computerScore > humanScore) {
        alert(`Final score: You: ${humanScore} | Computer: ${computerScore}. You Lose! Better luck next time.`);
    } else {
        alert(`Final score: You: ${humanScore} | Computer ${computerScore}. It's a draw...`);
    }
}

playGame();