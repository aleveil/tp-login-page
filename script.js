const button = document.querySelector("#button");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector("#error-msg");

button.addEventListener("click", () => {
	console.log(emailInput.value);
	if (emailInput.value === "" || passwordInput.value === "") {
		errorMessage.classList.remove("hidden");
	}
	else
		errorMessage.classList.add("hidden");
});