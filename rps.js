const answers = ['Rock','Paper','Scissors']

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
}

console.log(getComputerChoice());