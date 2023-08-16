const links = document.querySelectorAll(".nav-links > li > a");

links.forEach((link) => {
	if (link.pathname === window.location.pathname) {
		link.classList.add("active");
	}
});
