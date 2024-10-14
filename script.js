const gridContainer = document.getElementById("grid-container");
const scoreDisplay = document.getElementById("score");
const bpsDisplay = document.getElementById("bps");
const timerDisplay = document.getElementById("timer");
const gridSizeInput = document.getElementById("grid-size");
const gridSizeValue = document.getElementById("grid-size-value");
const startGameButton = document.getElementById("start-game");
const leaderboardList = document.getElementById("leaderboard-list");
const nameInputContainer = document.getElementById("name-input-container");
const playerNameInput = document.getElementById("player-name");
const submitNameButton = document.getElementById("submit-name");
const restartGameButton = document.getElementById("restart-game");

const startItems = document.getElementsByClassName("start-state");
const inGameItems = document.getElementsByClassName("in-game-state");
const endItems = document.getElementsByClassName("end-state");
const startEndItems = document.getElementsByClassName("start-end-state");

const scoreText = document.getElementById("score-text");

let score = 0;
let bps = 0.0;
let activeCell = null;
let timer = null;
let timeLeft = 60;
let countdownInterval;
let leaderboard = [];

let savedLeaderboard = localStorage.getItem("leaderboard");
if (savedLeaderboard != null) {
  leaderboard = JSON.parse(savedLeaderboard);
}

updateLeaderboard();
changeState("start");

// The formula is simple
// First we calculate the number of box an user can click e.g 3x3 grid means 9 box
// Then we calculate the number of bit to reprensent the max num box log2(max - 1)
// Then we take net target per second and multiply with the bit number
// Then we have bit per second
// This is used by neuralink, however it might not be right for snaptic as snaptic devices can theoretically traverse the whole screen resolution
// meaning a 1920*1080*NTPM
function calculateBPS(l, t) {
  return Math.max((Math.log2(t * t - 1) * l) / 60, 0);
}

function hideItems(items) {
  for (let item of items) {
    item.style.display = "none";
  }
}

function showItems(items) {
  for (let item of items) {
    item.style.display = "block";
  }
}

function changeState(state) {
  switch (state) {
    case "start":
      showItems(startItems);
      showItems(startEndItems);
      hideItems(endItems);
      hideItems(inGameItems);
      break;
    case "in-game":
      showItems(inGameItems);
      hideItems(startItems);
      hideItems(startEndItems);
      hideItems(endItems);
      break;
    case "end":
      showItems(startEndItems);
      showItems(endItems);
      hideItems(startItems);
      hideItems(inGameItems);
      break;
  }
}

// Create grid based on input size
function createGrid(size) {
  gridContainer.innerHTML = ""; // Clear the existing grid

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("flex", "flex-row");
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("grid-item", "border-1", "border-black");
      cell.addEventListener("mousedown", () => handleClick(cell));
      row.appendChild(cell);
    }

    gridContainer.appendChild(row);
  }

  activateRandomCell();
}

// Randomly activate a cell
function activateRandomCell() {
  if (activeCell) {
    activeCell.classList.remove("active");
  }

  const cells = document.querySelectorAll(".grid-item");
  const randomIndex = Math.floor(Math.random() * cells.length);
  activeCell = cells[randomIndex];
  activeCell.classList.add("active");
}

// Handle cell clicks
function handleClick(cell) {
  if (cell === activeCell) {
    score++;
    activateRandomCell();
  } else {
    score--;
  }

  scoreDisplay.textContent = `${score}`;

  bps = calculateBPS(score, Number(gridSizeInput.value));
  bpsDisplay.textContent = `${bps.toFixed(2)}`;
}

// Start countdown timer
function startTimer() {
  timeLeft = 60;
  timerDisplay.textContent = `${timeLeft}s`;

  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      endGame();
    }
  }, 1000);
}

// End the game
function endGame() {
  changeState("end");
  scoreText.textContent = `Your score is ${bps} BPS (${score} NTPM)`;
}

// Reset the game after timer ends
function resetGame() {
  clearInterval(countdownInterval);
  score = 0;
  scoreDisplay.textContent = "0";
  gridContainer.innerHTML = ""; // Clear grid
  timerDisplay.textContent = "60s";
}

// Add player to leaderboard
function addToLeaderboard(name, score) {
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score); // Sort by highest score
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  updateLeaderboard();
}

// Update the leaderboard display
function updateLeaderboard() {
  leaderboardList.innerHTML = "";
  leaderboard.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
    leaderboardList.appendChild(listItem);
  });
}

// Start game button functionality
startGameButton.addEventListener("click", () => {
  changeState("in-game");
  const gridSize = parseInt(gridSizeInput.value);

  if (countdownInterval) {
    clearInterval(countdownInterval); // Clear previous timer if any
  }

  resetGame();
  createGrid(gridSize);
  startTimer();
});

gridSizeInput.addEventListener("change", () => {
  gridSizeValue.textContent = gridSizeInput.value;
});

// Submit name and add to leaderboard
submitNameButton.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (playerName) {
    addToLeaderboard(playerName, score);
    playerNameInput.value = ""; // Clear input
    resetGame();
  } else {
    alert("Please enter a valid name");
  }
});

// Restart game button functionality
restartGameButton.addEventListener("click", () => {
  const gridSize = parseInt(gridSizeInput.value);
  resetGame();
  createGrid(gridSize);
  changeState("in-game");
  startTimer();
});
