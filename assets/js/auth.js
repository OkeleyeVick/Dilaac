const regEye = document.querySelectorAll("#register .form-input em");
const logEye = document.querySelector("#login .form-input em");
regEye.forEach((icon) => {
	icon.addEventListener("click", function () {
		let value = icon.previousElementSibling;
		if (value.type === "password") {
			value.type = "text";
			icon.classList.remove("bi-eye");
			icon.classList.add("bi-eye-slash");
		} else {
			value.type = "password";
			icon.classList.add("bi-eye");
			icon.classList.remove("bi-eye-slash");
		}
	});
});
logEye.addEventListener("click", function () {
	let value = logEye.previousElementSibling;
	if (value.type === "password") {
		value.type = "text";
		logEye.classList.remove("bi-eye");
		logEye.classList.add("bi-eye-slash");
	} else {
		value.type = "password";
		logEye.classList.add("bi-eye");
		logEye.classList.remove("bi-eye-slash");
	}
});
