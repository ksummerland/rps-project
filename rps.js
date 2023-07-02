const answers = ['Rock','Paper','Scissors']

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
}

const computerSelection = getComputerChoice();

const playerSelection = prompt('Enter your choice!', '').toLowerCase();



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
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
