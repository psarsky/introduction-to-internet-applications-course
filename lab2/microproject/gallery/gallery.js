function openOverlay(img) {
	const overlay = document.getElementById("overlay");
	const overlayImg = document.getElementById("overlay-img");
	const overlayCaption = document.getElementById("overlay-caption");

	overlayImg.src = img.src;
	overlayCaption.textContent = img.alt;
	overlay.style.display = "flex";
}

function closeOverlay() {
	document.getElementById("overlay").style.display = "none";
}
