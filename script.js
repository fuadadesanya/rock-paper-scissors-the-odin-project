   let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3);
      if (randomNum === 0) return "rock";
      if (randomNum === 1) return "paper";
      return "scissors";
    }

    function playRound(humanChoice) {
      let computerChoice = getComputerChoice();
      let resultText = "";

      if (humanChoice === computerChoice) {
        resultText = `It's a tie! You both chose ${humanChoice}.`;
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        resultText = `You win! ${humanChoice} beats ${computerChoice}.`;
      } else {
        computerScore++;
        resultText = `You lose! ${computerChoice} beats ${humanChoice}.`;
      }

      // Update DOM
      document.getElementById("roundResult").textContent = resultText;
      document.getElementById("playerScore").textContent = humanScore;
      document.getElementById("computerScore").textContent = computerScore;

      // Check for winner
      if (humanScore === 5 || computerScore === 5) {
        let winnerText =
          humanScore === 5 ? "🎉 You won the game!" : "💻 Computer wins the game!";
        document.getElementById("winner").textContent = winnerText;

        // Disable buttons after game ends
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
      }
    }

    // Event listeners for buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));