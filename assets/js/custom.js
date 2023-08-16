const formFile = document.getElementById("formFile");
const selectImage = document.querySelector("form button.select-image");

selectImage.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  formFile.click();
});
