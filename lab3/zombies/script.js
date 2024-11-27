const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const crosshair = document.getElementById("crosshair");
const zombies = [];

let score = 0;
let health = 3;
let index = 0;
let running = true;

function spawnZombie() {
	let zombie = document.createElement("div");
	let speed = Math.floor(Math.random() * 50 + 10);
	let position = Math.floor(Math.random() * 62 + 2);
    let scale = (Math.random() * 80 + 20) / 100;
    let interval = 1000 / speed;
    let zombieAnimFrame = 0;
    let last = 0;
    let pos = 0;

	zombie.classList.add("zombie");
	zombie.setAttribute("id", index);
	zombie.style.bottom = `${position}vh`;
	zombie.style.scale = scale;

	zombie.addEventListener("click", (e) => {
		score += 20;
		scoreDisplay.textContent = score;
		clearInterval(zombies[zombie.id]);
		zombie.remove();
		e.stopPropagation();
	});

	gameArea.appendChild(zombie);
	index++;

	const zombieWalk = (timestamp) => {
		if (timestamp - last >= interval) {
			last = timestamp;
			zombieAnimFrame -= 20;
			zombie.style.backgroundPositionX = zombieAnimFrame + "vh";
        }
		requestAnimationFrame(zombieWalk);
	};
    requestAnimationFrame(zombieWalk);
    
    zombies[zombie.id] = setInterval(() => {
        zombie.style.left = 100 - pos + "vw";
        pos++;
        if (pos == 115) {
            zombie.remove();
            health -= 1;
            for (let i = health; i < 3; i++) {
                document.querySelectorAll("img")[i].src = "assets/empty_heart.png";
            }
            clearInterval(zombies[zombie.id]);
            if (health <= 0) {
				gameOver();
			}
        }
    }, interval);
}

function moveCrosshair(e) {
    crosshair.style.left = e.clientX + "px";
    crosshair.style.top = e.clientY + "px";
}

function backgroundHit() {
	score -= 5;
	scoreDisplay.textContent = score;
}

function startGame() {
    gameArea.innerHTML = "";
    health = 3;
    score = 0;
    index = 0;
    
    scoreDisplay.textContent = score;
    document.body.style.cursor = "none";

	window.addEventListener("mousemove", moveCrosshair);
    gameArea.addEventListener("click", backgroundHit);
    
    for (let i = 0; i < 3; i++) {
		document.querySelectorAll("img")[i].src = "assets/full_heart.png";
	}
    
    running = setInterval(() => {
        spawnZombie();
        if (score < 0) {
			gameOver();
		}
    }, 1000);
}

function gameOver() {
    clearInterval(running);
    let zombiesToRemove = document.getElementsByClassName("zombie");

    for (let i = 0; i < zombiesToRemove.length; i++) {
        zombiesToRemove[i].remove();
    }
    window.removeEventListener("mousemove", moveCrosshair);
	gameArea.removeEventListener("click", backgroundHit);
    document.body.style.cursor = "default";
    startGame();
}

startGame();
