/* FAQ */
var q = document.getElementsByClassName("question");
var i;

for (i = 0; i < q.length; i++) {
	q[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
