"use strict";

function appendChild({ imageParentContainer, imageSrc = "", error, parentContainer }) {
	const image = new Image();
	image.classList.add("img-fluid");
	image.src = imageSrc;

	parentContainer.querySelectorAll(".error-message").forEach((error) => {
		return error.remove();
	});

	if (imageParentContainer && imageSrc) {
		const child = imageParentContainer.firstChild;
		child ? imageParentContainer.removeChild(child) : "";
		return imageParentContainer.appendChild(image);
	}

	if (error) {
		const div = document.createElement("div");
		div.classList.add("error-message", "my-2", "d-block", "w-100");
		div.setHTML(error);
		return parentContainer.appendChild(div);
	}
}

export { appendChild };
