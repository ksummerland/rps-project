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
    let playerScore = 0;
    let computerScore = 0;
    for (let games = 0; games < 5; games++) {
        const playerSelection = prompt('Enter your choice!', '').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        function score() {
            if (playRound(playerSelection, computerSelection) === 'You Win!') {
                playerScore++;
                return `Player: ${playerScore} Computer: ${computerScore}`;
            } else if (playRound(playerSelection, computerSelection) === 'You Lose!') {
                computerScore++;
                return `Player: ${playerScore} Computer: ${computerScore}`;
            } else if (playRound(playerSelection, computerSelection) === 'It\'s a tie!') {
                games--;
                return `Player: ${playerScore} Computer: ${computerScore}`;
            }
        } 
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(games);
        console.log(score());

        if (games === 4 && playerScore < computerScore) {
            return 'Whoops. You lost the game.';
        } else if (games === 4 && playerScore > computerScore) {
            return 'Congratulations! You won the game!';
        }

        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());