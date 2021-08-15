'use strict';

const main = () => {
	const el = document.querySelector(".main-nav");
	const observer = new IntersectionObserver(
		([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
		{ threshold: [1] }
	);
	observer.observe(el);

	document.getElementById('menu_btn').addEventListener('click', toggleMenu, !1);

	addEventListenerList(document.querySelectorAll('nav.main-nav a'), 'click', closeMenu);

	addEventListenerList(document.querySelectorAll('#proyectos a'), 'click', showBigPicture);

	document.getElementById('contactForm').addEventListener('submit', formEval, !1);

	document.getElementById('tyc_anchor').addEventListener('click', tycShow, !1);

	AOS.init();
};

document.addEventListener('DOMContentLoaded', main, !1);
