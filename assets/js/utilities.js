(() => {
	const modalTimeFrameSelections = document.querySelectorAll("#time-frame .each-date");

	const searchButton = document.querySelector(".notify-user button.v-search-icon");
	const searchBar = document.querySelector(".topper .v-search-input");

	// function for search input over all the pages
	function toggleSearchInput() {
		const activeClassName = "active";

		return this.classList.toggle(activeClassName), searchBar.classList.toggle(activeClassName);
	}
	searchButton.addEventListener("click", toggleSearchInput);

	// specific to pages that have date selection and input
	for (const dateContainer of modalTimeFrameSelections) {
		const dateInput = dateContainer.querySelector("input[type='date']");
		const dateToggleButton = dateContainer.querySelector(".date-toggler");
		dateToggleButton.addEventListener("click", function () {
			dateInput.showPicker();
		});

		function getFormattedDate(dateFormat) {
			let month, year, monthIndex;
			if (dateFormat) {
				const monthsShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
				const getMonth = dateFormat.split("-")[1];
				if (getMonth.startsWith(0)) {
					monthIndex = getMonth.split("")[1];
				} else {
					monthIndex = getMonth;
				}

				month = monthsShortNames.at(monthIndex - 1);
				year = dateFormat.split("-")[0];
			}

			return { month, year };
		}

		dateInput.addEventListener("change", function () {
			const { month, year } = getFormattedDate(this.value);
			dateContainer.querySelector(".date-value").textContent = `${month} ${year}`;
		});
	}
})();
