// DOM elements
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
const startScreen = document.getElementById("startScreen");
const startText = document.getElementById("startText");
const startButton = document.getElementById("startButton");
const noButton = document.getElementById("noButton");
const gameOverScreen = document.getElementById("gameOver");
const finalScoreDisplay = document.getElementById("finalScore");
const maxKillstreakDisplay = document.getElementById("maxStreak");
const gameOverText = document.getElementById("gameOverText");
const resetButton = document.getElementById("reset");
const noButton2 = document.getElementById("noButton2");
const crosshair = document.getElementById("crosshair");

const sounds = {
	start: document.getElementById("startMusic"),
	background: document.getElementById("backgroundMusic"),
	zombie: document.getElementById("zombieSounds"),
	gameOver: document.getElementById("gameOverMusic"),
};

const zombieIntervals = [];

// Game variables
let gameState = {
	score: 0,
	killstreak: 0,
	maxKillstreak: 0,
	zombieIndex: 0,
	health: 3,
	spawner: null,
	scoreHealthCheck: null,
	noZombiesHitYet: true,
};

// Sound configuration
sounds.start.volume = 0.5;
sounds.background.volume = 0.08;
sounds.zombie.volume = 0.8;
sounds.gameOver.volume = 0.5;

// Game functions
function spawnZombie() {
	let zombie = document.createElement("div");

	let scale = (Math.random() * 80 + 20) / 100;
	let interval = 1000 / Math.floor(Math.random() * 50 + 10);
	let verticalPosition = Math.floor(Math.random() * 62 + 2);
	let horizontalPosition = 0;
	let zombieAnimFrame = 0;

	zombie.id = gameState.zombieIndex++;
	zombie.classList.add("zombie");
	zombie.style.bottom = verticalPosition + "vh";
	zombie.style.scale = scale;
	gameArea.appendChild(zombie);

	// Zombie animation
	let lastFrame = 0;
	const zombieWalk = (timestamp) => {
		if (timestamp - lastFrame >= interval) {
			lastFrame = timestamp;
			zombieAnimFrame -= 20;
			zombie.style.backgroundPositionX = zombieAnimFrame + "vh";
		}
		requestAnimationFrame(zombieWalk);
	};
	requestAnimationFrame(zombieWalk);

	// Zombie movement
	zombieIntervals[zombie.id] = setInterval(() => {
		zombie.style.left = 100 - horizontalPosition + "vw";
		horizontalPosition++;
		if (horizontalPosition >= 115) {
			playSound("oof", 0.6);
			updateHealth(-1);
			zombie.remove();
			clearInterval(zombieIntervals[zombie.id]);
		}
	}, interval);

	// Zombie click event
	zombie.addEventListener("click", (e) => {
		playSound("shot", 0.4);
		playSound("death", 0.4);
		if (gameState.noZombiesHitYet) {
			gameState.noZombiesHitYet = false;
		}
		gameState.score += 20;
		gameState.killstreak++;
		gameState.maxKillstreak = Math.max(gameState.killstreak, gameState.maxKillstreak);
		updateScore();
		clearInterval(zombieIntervals[zombie.id]);
		zombie.remove();
		e.stopPropagation();
	});
}

function startGame() {
	Object.assign(gameState, {
		score: 0,
		killstreak: 0,
		zombieIndex: 0,
		health: 3,
		noZombiesHitYet: true,
	});

	updateScore();
	updateHealth(0);

	gameOverScreen.style.display = "none";
	crosshair.style.display = "flex";
	document.body.style.cursor = "none";

	sounds.gameOver.pause();
	sounds.gameOver.currentTime = 0;
	sounds.background.play();
	sounds.zombie.play();

	window.addEventListener("mousemove", moveCrosshair);
	gameArea.addEventListener("click", backgroundHit);

	gameState.spawner = setInterval(spawnZombie, 1000);

	gameState.scoreHealthCheck = setInterval(() => {
		if (gameState.score < 0 || gameState.health <= 0) gameOver();
	}, 100);
}

function gameOver() {
	clearInterval(gameState.spawner);
	clearInterval(gameState.scoreHealthCheck);

	document.querySelectorAll(".zombie").forEach((zombie) => zombie.remove());
	zombieIntervals.forEach(clearInterval);
	zombieIntervals.length = 0;

	window.removeEventListener("mousemove", moveCrosshair);
	gameArea.removeEventListener("click", backgroundHit);

	document.body.style.cursor = "default";
	crosshair.style.display = "none";
	gameOverScreen.style.display = "flex";
	finalScoreDisplay.textContent = "Final Score: " + gameState.score;
	maxKillstreakDisplay.textContent = "Max Killstreak: " + gameState.maxKillstreak;
	gameOverText.textContent = "Try Again?";
	sounds.background.pause();
	sounds.background.currentTime = 0;
	sounds.zombie.pause();
	sounds.zombie.currentTime = 0;
	sounds.gameOver.play();
	resetButton.addEventListener("click", startGame);
	noButton2.addEventListener("click", () => (gameOverText.textContent = "THERE IS NO ESCAPE"));
}

// Utility functions
function updateHealth(amount) {
	gameState.health += amount;
	const hearts = document.querySelectorAll("img");
	for (let i = 0; i < 3; i++) {
		hearts[i].src = i < gameState.health ? "assets/full_heart.png" : "assets/empty_heart.png";
	}
}

function updateScore() {
	scoreDisplay.textContent = gameState.score;
	streakDisplay.textContent = "Killstreak: " + gameState.killstreak;
}

function moveCrosshair(e) {
	crosshair.style.left = e.clientX + "px";
	crosshair.style.top = e.clientY + "px";
}

function backgroundHit() {
	playSound("shot", 0.4);
	if (!gameState.noZombiesHitYet) {
		gameState.score -= 5;
		gameState.killstreak = 0;
		updateScore();
	}
}

function playSound(soundName, volume) {
	const sound = new Audio("assets/" + soundName + ".mp3");
	sound.volume = volume;
	sound.play();
}

let clickCounter = 0;
sounds.start.play();
startButton.addEventListener("click", () => {
	sounds.start.pause();
	sounds.start.currentTime = 0;
	startScreen.style.display = "none";
	startGame();
});
noButton.addEventListener("click", () => {
	sounds.start.play();
	switch (clickCounter) {
		case 0:
			startText.textContent = "Are you sure?";
			break;
		case 1:
			startText.textContent = "Think again...";
			break;
		case 2:
			startText.textContent = "You can't run...";
			break;
		case 3:
			startText.textContent = "You can't hide...";
			break;
		case 4:
			startText.textContent = "THERE IS NO ESCAPE";
			break;
	}
	clickCounter++;
});
