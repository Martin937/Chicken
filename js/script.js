import { sliderOperation } from "./carousel.js";
import { addedClassActive } from "./menu.js";

// для добавления класса "active" к выбранному пункту меню
addedClassActive()
// для работы слайдера
sliderOperation()


//tabs
const tabs = document.querySelectorAll('.catalog__tab')
const info = document.querySelector('.catalog__tabs')
const content = document.querySelectorAll('.catalog__content')

const catalogItemsLink = document.querySelectorAll('.catalog-item__link')
const catalogItemContents = document.querySelectorAll('.catalog-item__content')
const catalogItemLists = document.querySelectorAll('.catalog-item__list')


info.addEventListener('click', toggleTab)

function toggleTab(e) {
	if (e.target.classList.contains('catalog__tab') && !e.target.classList.contains('catalog__tab_active')) {
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('catalog__tab_active');
		}
		for (let i = 0; i < content.length; i++) {
			if (e.target.dataset.type !== content[i].dataset.type) {
				content[i].classList.remove('catalog__content_active');
			} else {
				content[i].classList.add('catalog__content_active');
			}
		}
		e.target.classList.add('catalog__tab_active');
	}
}

function toggleSlide() {
	for (let i = 0; i < catalogItemsLink.length; i++) {
		catalogItemsLink[i].addEventListener('click', (event) => {
			event.preventDefault();
			if (catalogItemsLink[i].classList.contains('catalog-item__content_active')) {
				catalogItemsLink[i].classList.remove('catalog-item__content_active');
			} else {

			}
			catalogItemsLink[i]
			console.log(catalogItemsLink[i])
		})
	}
}
toggleSlide()


// function toggleSlide(item) {
// 	$(item).each(function(i) {
// 			$(this).on('click', function(e) {
// 					e.preventDefault();
// 					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
// 					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
// 			})
// 	});
// };

// toggleSlide('.catalog-item__link');
// toggleSlide('.catalog-item__back');