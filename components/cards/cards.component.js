import data from "../../data/data.js"
import { createCustomElement } from "../../js/functions.module.js"
//  createCustomElement('div', {classes: [''],content: '', 'data-prop': 'example'});
import { renderCardElement } from "./card.component.js"
import { renderSortedElement } from "./sorted.component.js"

export const renderCardsContainer = () => {

	const catalogsContainer = createCustomElement('div', {
		classes: ['catalogs-container'],
	})
	catalogsContainer.append(renderSortedElement())

	for (let i = 0; i < data.length; i++) {

		const cardsContainer = createCustomElement('div', {
			classes: ['catalog-cards'],
		})
		if (i === 0) {
			cardsContainer.classList.add('catalog-cards-active');
		}
		// const cardsTitleElement = createCustomElement('h2', {
		// 	content: data[i].title
		// })
		// const cardsTitleElementDescr = createCustomElement('h3', {
		// 	content: data[i].description
		// })

		// cardsContainer.append(cardsTitleElement)
		// cardsContainer.append(cardsTitleElementDescr)
		// cardsContainer.append(renderSortedElement())

		for (let j = 0; j < data[i].products.length; j++) {

			cardsContainer.append(renderCardElement(data[i].products[j]))
		}

		catalogsContainer.append(cardsContainer)

	}

	return catalogsContainer
}



