let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "❗ Please enter a number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  attempts++;

  if (userGuess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "blue";
  } else if (userGuess > secretNumber) {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";
  } else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    message.style.color = "green";
    document.getElementById("resetBtn").style.display = "inline-block";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  document.getElementById("guessInput").value = "";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("guessInput").
