export function createCustomElement(tag, options) {
	const element = document.createElement(tag);

	const props = {
		...options,
		// id: options.id || '',
		// content: options.content || '',
	};

	// Применяем свойства к элементу
	for (const prop in props) {
		if (Object.prototype.hasOwnProperty.call(props, prop)) {
			if (prop === 'classes') {
				if (Array.isArray(props[prop])) {
					props[prop].forEach(className => element.classList.add(className));
				} else {
					element.classList.add(props[prop]);
				}
			} else if (prop === 'content') {
				element.innerHTML = props[prop];
			} else if (prop.startsWith('data-')) {
				element.setAttribute(prop, props[prop]);
			} else {
				element[prop] = props[prop];
			}
		}
	}

	return element;
}


//  createCustomElement('div', {classes: [''], id: '',content: '', 'data-prop': 'example'});







