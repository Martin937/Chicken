import { createCustomElement } from "../../js/functions.module.js"
//  createCustomElement('div', {classes: [''],content: '', 'data-prop': 'example'});


export const renderSortedElement = () => {

	const sortedWrapperElement = createCustomElement('div',
		{ classes: ['sorted-wrapper'] })

	const sortedTitleElement = createCustomElement('h3',
		{ content: 'Фильтр' })

	const sortedElementOptions = [
		{
			value: 'name',
			title: 'По названию'
		},
		{
			value: 'price',
			title: 'По цене'
		},
	]

	const sortedElement = createCustomElement('select', {
		id: 'sort-select',
	})

	for (const key in sortedElementOptions) {
		const optionElement = createCustomElement('option', {
			value: sortedElementOptions[key].value,
		})
		optionElement.append(sortedElementOptions[key].title)
		sortedElement.append(optionElement)
	}

	sortedWrapperElement.append(sortedTitleElement)
	sortedWrapperElement.append(sortedElement)

	return sortedWrapperElement
}

