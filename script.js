let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3)
        return "rock";
    if (randomNumber > 2/3)
        return "paper";
    return "scissor";
}
    
function playRound(humanChoice, computerChoice) {
    let output = document.querySelector("#output");
    let result = document.createElement("p");
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie";
    }
    else if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper") {
        result.textContent = `Yay! you won, ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }
    else {    
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    output.appendChild(result);
    let score = document.createElement("p");
    score.textContent =` Your score: ${humanScore}\nComputer score: ${computerScore}`;
    output.appendChild(score);
    if (humanScore === 5 || computerScore === 5){
        let output = document.querySelector("#output");
        let result = document.createElement("p");
        if (humanScore === 5){
            result.textContent = "You won the game";
        }
        else {
            result.textContent = "You lost the game";
        }
        output.appendChild(result);
    }
}

function playGame() {
    let buttons = Array.from(document.querySelectorAll("button"));
    console.log(buttons);
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent.toLowerCase();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        })
    });
}

playGame();