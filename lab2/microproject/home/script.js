/* Theme */
function toggleTheme() {
	document.body.classList.toggle("dark-mode");
	localStorage.setItem(
		"theme",
		document.body.classList.contains("dark-mode") ? "dark" : "light"
	);
}

window.onload = () => {
	if (localStorage.getItem("theme") === "dark") {
		document.body.classList.add("dark-mode");
	}
};

/* Clock */
setInterval(showTime, 1000);

function showTime() {
	let now = new Date();
	document.getElementById("clock").textContent = now.toLocaleTimeString();
}

showTime();
