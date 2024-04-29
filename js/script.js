import { renderTabsContainer } from "../components/tabs/tabs.component.js"
import { renderCardsContainer } from "../components/cards/cards.component.js"

document.addEventListener('DOMContentLoaded', function () {
	// Гамбургер
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const navUl = document.querySelector('nav ul');

	hamburgerMenu.addEventListener('click', () => {
		navUl.classList.toggle('show');
		hamburgerMenu.classList.toggle('active');
	});

	// Слайдер
	var splide = new Splide('.splide', {
		type: 'loop',
		perPage: 3,
		arrows: false,
		rewindByDrag: true,
		heightRatio: 0.3,
		autoplay: true,
		pauseOnHover: true,
		gap: '1em',
		breakpoints: {
			768: {
				perPage: 2,
			},
			540: {
				perPage: 1,
			},
		}
	});
	splide.mount();

	// каталог
	const catalogContainer = document.querySelector('.catalog .container');
	// Добавляем контейнер для табов внутрь основного контейнера
	catalogContainer.append(renderTabsContainer());
	catalogContainer.append(renderCardsContainer());
});



