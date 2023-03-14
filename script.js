const button = document.querySelector("#button");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector("#error-msg");
const form = document.querySelector("form");
const success = document.querySelector("#success-login");

button.addEventListener("click", () => {
	if (emailInput.value === "" || passwordInput.value === "") {
		errorMessage.innerHTML = "All fields must be filled !";
		errorMessage.classList.remove("hidden");
	}
	else
	{
		if (emailInput.value === "john.doe@example.com" && passwordInput.value === "Test12345") {
			errorMessage.classList.add("hidden");
			form.classList.add("hidden");
			success.classList.remove("hidden");
		}
		else {
			errorMessage.innerHTML = "Wrong email and/or password !";
			errorMessage.classList.remove("hidden");
		}
	}
	
});