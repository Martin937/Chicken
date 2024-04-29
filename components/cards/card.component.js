import { createCustomElement } from "../../js/functions.module.js"
//  createCustomElement('div', {classes: [''], content: '', 'data-prop': 'example'});

// Рендеринг карточек
export const renderCardElement = (props) => {

	const cardElement = createCustomElement('div', {
		classes: ['catalog-card'],
	})
	// CONTENT
	const cardContent = createCustomElement('div', {
		classes: ['card-content'],
	})

	const cardDescr = createCustomElement('div', {
		classes: ['card-descr', 'card-descr-active'],
	})
	const cardImg = createCustomElement('img', {
		src: props.image,
		alt: "Rooster"
	})
	const cardTitle = createCustomElement('div', {
		classes: ['card-title'],
		content: props.breed
	})
	const cardSubtitle = createCustomElement('div', {
		classes: ['card-subtitle'],
		content: props.advantages
	})
	const cardLink = createCustomElement('a', {
		classes: ['card-link'],
		content: "ПОДРОБНЕЕ",
		// href: "#"
	})

	// Добавляем обработчик события
	cardLink.addEventListener('click', () => handleMoreClick(cardDescr, cardMore));

	cardDescr.appendChild(cardImg);
	cardDescr.appendChild(cardTitle);
	cardDescr.appendChild(cardSubtitle);
	cardDescr.appendChild(cardLink);

	const cardMore = createCustomElement('div', {
		classes: ['card-more'],
	})

	const cardUl = createCustomElement('ul', {
	})

	props.detailedDescription.forEach(description => {
		const li = document.createElement('li')
		li.append(description)
		cardUl.append(li)
	})

	const backLink = createCustomElement('a', {
		classes: ['card-link'],
		content: "назад",
		// href: "#",
	})

	// Добавляем обработчик события
	backLink.addEventListener('click', () => handleBackClick(cardDescr, cardMore));

	cardMore.append(cardUl);
	cardMore.append(backLink);

	cardContent.append(cardDescr);
	cardContent.append(cardMore);

	// HR

	const cardHr = createCustomElement('hr')

	// FOOTER
	const cardFooter = createCustomElement('div', {
		classes: ['card-footer'],
	})
	const cardPrices = createCustomElement('div', {
		classes: ['card-prices'],
	})
	const oldPrice = createCustomElement('div', {
		classes: ['card-old-price'],
		content: `${props.oldPrice} ₽`
	})
	const currentPrice = createCustomElement('div', {
		classes: ['card-price'],
		content: `${(props.oldPrice * props.discount).toFixed(2)} ₽`
	})
	cardPrices.append(oldPrice);
	cardPrices.append(currentPrice);

	const buyButton = createCustomElement('button', {
		classes: ['card-button'],
		content: "КУПИТЬ"
	})

	cardFooter.append(cardPrices);
	cardFooter.append(buyButton);

	cardElement.append(cardContent);
	cardElement.append(cardHr);
	cardElement.append(cardFooter);

	return cardElement
}


function handleMoreClick(el1, el2) {
	el1.classList.remove('card-descr-active')
	el2.classList.add('card-more-active')
}
function handleBackClick(el1, el2) {
	el1.classList.add('card-descr-active')
	el2.classList.remove('card-more-active')
}

