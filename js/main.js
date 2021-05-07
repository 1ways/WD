$(function () {
	const burgerMenu = document.querySelector(".menu__icon");
	if (burgerMenu) {
		const responsiveMenu = document.querySelector(".menu__body");
		burgerMenu.addEventListener("click", function (e) {
			burgerMenu.classList.toggle("active");
			document.body.classList.toggle("lock");
			responsiveMenu.classList.toggle("active");
		});
	}

	const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
    if (menuLinks.length > 0) {
        console.log(menuLinks.length);
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", OnMenuLinkClick);
		});

		function OnMenuLinkClick(e) {
			const menuLink = e.target;
			if (
				menuLink.dataset.goto &&
				document.querySelector(menuLink.dataset.goto)
			) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue =
					gotoBlock.getBoundingClientRect().top +
					pageYOffset;

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth",
                });
                e.preventDefault();
			}
		}
	}
});
