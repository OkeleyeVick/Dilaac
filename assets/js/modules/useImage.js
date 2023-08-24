"use strict";

const readFile = function (uploadedFile) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.addEventListener("load", () => resolve(reader.result));
		reader.addEventListener("error", () => reject(reader.error));

		reader.readAsDataURL(uploadedFile);
	});
};

const useImage = async (image) => {
	let error, base64URL;

	if (!image) return;
	const imageFile = image.target.files[0];
	if (!imageFile) return;
	const { newError, newResult } = await dealWithFile(imageFile);

	(error = newError), (base64URL = newResult);

	function checkTypeOfFile(fileName) {
		let isAllowableFile = true,
			errorMessage = "";
		const fileExtensions = ["png", "jpg", "jpeg"];

		const fileExt = fileName.split(".")[1].toLowerCase();
		if (!fileExtensions.includes(fileExt)) {
			isAllowableFile = false;
			errorMessage = "Upload an image in PNG, JPEG or JPG format!";
		}
		return { isAllowableFile, errorMessage };
	}

	async function dealWithFile(image) {
		let newError, newResult;
		if (!image) return;
		const { isAllowableFile, errorMessage } = checkTypeOfFile(image.name);

		if (errorMessage !== "" || isAllowableFile === false) {
			newError = errorMessage;
		}

		if (isAllowableFile && errorMessage === "") {
			newResult = await readFile(image);
		}
		return { newError, newResult };
	}

	return { error, base64URL };
};

export { useImage as treatImage };
