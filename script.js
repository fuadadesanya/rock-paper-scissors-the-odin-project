 function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3)
      if (randomNum == 0) {
        computerChoice = "rock";
      }
      else if (randomNum == 1) {
        computerChoice = "paper";
      }
      else {
        computerChoice = "scissors";
      }
      return computerChoice;
    }

    function getHumanChoice() {
      let humanChoice = prompt("Enter 'rock', 'paper', or 'scissors': ");
      return humanChoice;
    }

    function playGame() {
      let humanScore = 0;
      let computerScore = 0;
      let result;
      let round = 0;

      function playRound(humanChoice, computerChoice) {
        round++;
        humanChoice = humanChoice.toLowerCase();
        if (computerChoice == humanChoice) {
          result = null;
        }
        else if (computerChoice == "rock" && humanChoice == "paper") {
          humanScore++;
          result = true;
        }
        else if (computerChoice == "paper" && humanChoice == "scissors") {
          humanScore++;
          result = true;
        }
        else if (computerChoice == "scissors" && humanChoice == "rock") {
          humanScore++;
          result = true;
        }
        else {
          computerScore++;
          result = false;
        }

        if (result) {
          return `You win, ${humanChoice} beats ${computerChoice}!`;
        }
        else if (result == 0) {
          return `You lose, ${computerChoice} beats ${humanChoice}!`;
        }
        else {
          return `It's a tie, you both played ${computerChoice}!`;
        }
      }
    }

    playGame();