import { createCustomElement } from "../../js/functions.module.js"
//  createCustomElement('div', {classes: [''],content: '', 'data-prop': 'example'});


export const renderSortedElement = () => {
	const sortedElementOptions = [
		{
			value: 'price',
			title: 'По цене'
		},
		{
			value: 'name',
			title: 'По названию'
		},
		{
			value: 'date',
			title: 'По дате'
		}
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

	return sortedElement
}

{/* <select id="sort-select">
	<option value="price">По цене</option>
	<option value="name">По названию</option>
	<option value="date">По дате</option>
</select> */}