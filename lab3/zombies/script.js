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
        }
    }, interval);
}

function moveCrosshair(e) {
	crosshair.style.top = e.pageY + "px";
	crosshair.style.left = e.pageX + "px";
}

function hitBackground() {
	score -= 5;
	scoreDisplay.textContent = score;
}

document.body.style.cursor = "none";
window.addEventListener("mousemove", moveCrosshair);
gameArea.addEventListener("click", hitBackground);

spawnZombie();
spawnZombie();
spawnZombie();
