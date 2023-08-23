"use strict";

function sayName(name) {
	return console.log("Vickkk is my name");
}

const readFile = function (uploadedFile) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.addEventListener("load", () => resolve(reader.result));
		reader.addEventListener("error", () => resolve(reader.error));

		reader.readAsDataURL(uploadedFile);
	});
};

function checkTypeOfFile(fileName) {
	let isAllowableFile = true,
		errorMessage = null;
	const fileExtensions = ["png", "jpg", "jpeg"];

	const fileExt = fileName.split(".")[1].toLowerCase();
	if (!fileExtensions.includes(fileExt)) {
		isAllowableFile = false;
		errorMessage = "Upload an image in PNG, JPEG or JPG format!";
	}
	return { isAllowableFile, errorMessage };
}

async function dealWithFile(event) {
	const imageFile = event.target.files[0];
	const { isAllowableFile, errorMessage } = checkTypeOfFile(imageFile.name);

	if (errorMessage !== null || isAllowableFile === false) {
		UpdateTheDom(errorMessage ?? "Something went wrong, try uploading file again");
	}

	if (isAllowableFile && errorMessage === null) {
		const result = await readFile(imageFile);
		if (result) {
			fakeButton.querySelector("img.img-fluid").src = result;
			UpdateTheDom();
		}
	}
}

export { sayName };
