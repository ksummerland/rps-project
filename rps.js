const answers = ['Rock','Paper','Scissors']

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
}

const computerSelection = getComputerChoice();

const playerSelection = prompt('Enter your choice!', '').toLowerCase();



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'You Lose!';
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You Win!';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You Win!';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You Lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You Win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You Lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return 'It\'s a tie!';
    } else {
        return 'That\'s not an option!';
    }
}

function game() {
    for (let games = 0; games < 5; games++) {
        const playerSelection = prompt('Enter your choice!', '').toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());
