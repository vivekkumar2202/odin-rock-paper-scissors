function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 1/3)
        return "rock";
    if (randomNumber > 2/3)
        return "paper";
    return "scissor";
}