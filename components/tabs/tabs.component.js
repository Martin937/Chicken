import data from "../../data/data.js"
import { createCustomElement } from "../../js/functions.module.js"
//  createCustomElement('div', {classes: [''],content: '', 'data-prop': 'example'});

// Рендеринг табов
export const renderTabsContainer = () => {
	const tabsContainer = createCustomElement('div', {
		classes: ['catalog-tabs'],
		content: ''
	});

	data.forEach((tabData, index) => {
		const tabElement = renderTabElement(tabData);
		if (index === 0) {
			tabElement.classList.add('catalog-tab-active');
		}
		// Добавляем обработчик события клика для каждого таба
		tabElement.addEventListener('click', () => handleTabClick(tabElement));
		tabsContainer.append(tabElement);
	});

	return tabsContainer;
};

const renderTabElement = (props) => {
	const tab = createCustomElement('div', {
		classes: ['catalog-tab'],
	});
	const tabDiv = createCustomElement('div', {
		content: props.title
	});
	tab.append(tabDiv);

	return tab;
}

const handleTabClick = (tabElement) => {
	// Получаем все табы и определяем индекс текущего таба
	const tabs = document.querySelectorAll('.catalog-tab');
	const tabIndex = Array.from(tabs).indexOf(tabElement);

	// Получаем все контейнеры для карточек
	const cardContainers = document.querySelectorAll('.catalog-cards');

	// Удаляем класс 'active' у всех табов и контейнеров для карточек
	tabs.forEach(tab => tab.classList.remove('catalog-tab-active'));
	cardContainers.forEach(container => container.classList.remove('catalog-cards-active'));

	// Добавляем класс 'active' только к текущему табу и соответствующему контейнеру для карточек
	tabElement.classList.add('catalog-tab-active');
	cardContainers[tabIndex].classList.add('catalog-cards-active');
}



