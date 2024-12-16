function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3)
        return "rock";
    if (randomNumber > 2/3)
        return "paper";
    return "scissor";
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissor");
    let choice_lower = choice.toLowerCase();
    if (choice_lower !== "rock" && choice_lower !== "paper" && 
        choice_lower !== "scissor") {
            console.log("Choose correct item");
            choice_lower = getHumanChoice();
        }
    return choice_lower;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie");
            }
            else if (humanChoice === "rock" && computerChoice === "scissor" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissor" && computerChoice === "paper") {
                console.log(`Yay! you won, ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
                }
            else {    
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore += 1;
            }
            console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
            return
        }

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("Computer won the game");
        return;
    }
    if (humanScore > computerScore) {
        console.log("You won the game");
        return;
    }
    console.log("The game ended with a tie");
    return;
}

playGame();