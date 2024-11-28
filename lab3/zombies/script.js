const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
const crosshair = document.getElementById("crosshair");
const gameOverScreen = document.getElementById("gameOver");
const finalScoreDisplay = document.getElementById("finalScore");
const maxKillstreakDisplay = document.getElementById("maxStreak");
const resetButton = document.getElementById("reset");
const gameOverMusic = document.getElementById("gameOverMusic");
const backgroundMusic = document.getElementById("backgroundMusic");
const zombieSounds = document.getElementById("zombieSounds");
const gunshot = document.getElementById("gunshot");
const zombieIntervals = [];

let score = 0;
let killstreak = 0;
let maxKillstreak = 0;
let index = 0;
let health = 3;
let spawner, scoreHealthCheck;
let noZombiesHitYet = true;

backgroundMusic.volume = 0.08;
zombieSounds.volume = 0.8;
gameOverMusic.volume = 0.5;


function spawnZombie() {
    let zombie = document.createElement("div");

    let scale = (Math.random() * 80 + 20) / 100;
    let interval = 1000 / Math.floor(Math.random() * 50 + 10);
	let verticalPosition = Math.floor(Math.random() * 62 + 2);
    let horizontalPosition = 0;
    let zombieAnimFrame = 0;
    let last = 0;

    zombie.id = index++;
	zombie.classList.add("zombie");
	zombie.style.bottom = verticalPosition + "vh";
	zombie.style.scale = scale;
    gameArea.appendChild(zombie);

	const zombieWalk = (timestamp) => {
		if (timestamp - last >= interval) {
			last = timestamp;
			zombieAnimFrame -= 20;
			zombie.style.backgroundPositionX = zombieAnimFrame + "vh";
        }
		requestAnimationFrame(zombieWalk);
	};
    requestAnimationFrame(zombieWalk);
    
    zombieIntervals[zombie.id] = setInterval(() => {
        zombie.style.left = 100 - horizontalPosition + "vw";
        horizontalPosition++;
        if (horizontalPosition == 115) {
            health -= 1;
            for (let i = health; i < 3; i++) {
                document.querySelectorAll("img")[i].src = "assets/empty_heart.png";
            }
            zombie.remove();
            clearInterval(zombieIntervals[zombie.id]);
        }
    }, interval);

    zombie.addEventListener("click", (e) => {
        let gunshot = new Audio("assets/shot.mp3");
        let zombieDeath = new Audio("assets/death.mp3");
        gunshot.volume = 0.4;
        zombieDeath.volume = 0.5;
        gunshot.play();
        zombieDeath.play();
        if (noZombiesHitYet) {
            noZombiesHitYet = false;
        }
		score += 20;
        killstreak++;
        maxKillstreak = Math.max(killstreak, maxKillstreak);
		scoreDisplay.textContent = score;
		streakDisplay.textContent = "Killstreak: " + killstreak;
		clearInterval(zombieIntervals[zombie.id]);
		zombie.remove();
		e.stopPropagation();
	});
}

function moveCrosshair(e) {
    crosshair.style.left = e.clientX + "px";
    crosshair.style.top = e.clientY + "px";
}

function backgroundHit() {
    let gunshot = new Audio("assets/shot.mp3");
    gunshot.volume = 0.4;
    gunshot.play();
    if (!noZombiesHitYet) {
        score -= 5;
        killstreak = 0;
        scoreDisplay.textContent = score;
        streakDisplay.textContent = "Killstreak: " + killstreak;
    }
}

function startGame() {
    score = 0;
	killstreak = 0;
	index = 0;
    health = 3;
    noZombiesHitYet = true;

    crosshair.style.display = "flex";
	gameOverScreen.style.display = "none";
    scoreDisplay.textContent = score;
    streakDisplay.textContent = "Killstreak: " + killstreak;
    document.body.style.cursor = "none";
    gameOverMusic.pause();
    gameOverMusic.currentTime = 0;
    backgroundMusic.play();
    zombieSounds.play();

	window.addEventListener("mousemove", moveCrosshair);
    gameArea.addEventListener("click", backgroundHit);
    
    for (let i = 0; i < 3; i++) {
		document.querySelectorAll("img")[i].src = "assets/full_heart.png";
    }
    
    spawner = setInterval(() => {
        spawnZombie();
    }, 1000);

    scoreHealthCheck = setInterval(() => {
		if (score < 0 || health <= 0) {
			gameOver();
        }
	}, 100);
}

function gameOver() {
    clearInterval(spawner);
    clearInterval(scoreHealthCheck);
    
    let zombiesToRemove = document.querySelectorAll(".zombie");
	for (let i = 0; i < zombiesToRemove.length; i++) {
		zombiesToRemove[i].remove();
	}
    zombieIntervals.forEach((interval) => {
        clearInterval(interval);
    });
    zombieIntervals.length = 0;

    window.removeEventListener("mousemove", moveCrosshair);
	gameArea.removeEventListener("click", backgroundHit);
    document.body.style.cursor = "default";
    crosshair.style.display = "none";
    gameOverScreen.style.display = "flex";
    finalScoreDisplay.textContent = "Final Score: " + score;
    maxKillstreakDisplay.textContent = "Max Killstreak: " + maxKillstreak;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    zombieSounds.pause();
    zombieSounds.currentTime = 0;
    gameOverMusic.play();
    resetButton.addEventListener("click", startGame);
}

startGame();
