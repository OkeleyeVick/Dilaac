const searchButton = document.querySelector(".notify-user button.v-search-icon");
const searchBar = document.querySelector(".topper .v-search-input");

function toggleSearchInput() {
	const activeClassName = "active";

	return this.classList.toggle(activeClassName), searchBar.classList.toggle(activeClassName);
}
searchButton.addEventListener("click", toggleSearchInput);
