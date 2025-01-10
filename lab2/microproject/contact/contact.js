/* Form */

const form = document.getElementById("contact-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const topic = document.getElementById("topic");
const topicError = document.getElementById("topic-error");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");
const chars = document.getElementById("characters");
const textarea = document.getElementById("message");

textarea.addEventListener("input", () => {
	chars.textContent = textarea.value.length;
});

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	emailError.textContent = "";
	topicError.textContent = "";
	messageError.textContent = "";

	let errorFlag = false;

	if (!validateEmail(email.value)) {
		emailError.textContent = "Niepoprawny adres e-mail";
		errorFlag = true;
	}

	if (topic.value === "") {
		topicError.textContent = "Wybierz temat";
		errorFlag = true;
	}

	if (message.value.trim().length <= 5) {
		messageError.textContent = "Wiadomość musi być dłuższa niż 5 znaków";
		errorFlag = true;
	}

	if (!errorFlag) {
		chars.textContent = "0";
		document.getElementById("contact-form").reset();
		alert("Formularz został pomyślnie wysłany!");
	}
});
