AOS.init();
const links = document.querySelectorAll(".logo-et-nav-links .nav-links > li > a");

links.forEach((link) => {
	if (link.pathname === window.location.pathname) {
		link.classList.add("active");
	}
});
