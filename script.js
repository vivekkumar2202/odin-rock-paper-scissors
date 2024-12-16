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
    return choice_lower;
}
