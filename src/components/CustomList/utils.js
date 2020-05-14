/**
 * Filter an array by a String prop, regardless lettercase (uppercase/lowercase)
 *
 * @param {Array} array to filter
 * @param {String} text contains this text
 * @return {Array} list with items containing 'text'
 */
export const filterArrayBy = (array, text) => {
	const regex = new RegExp(text, 'gi');

	return array.filter((item) => {
		const matches = item.address.match(regex);
		return matches;
	});
};

/**
 * Order an array by a Date type of prop
 * (given a descending prop that toggles between ascending or descending)
 *
 * @param {Array} array to order
 * @param {Boolean} descending false is not descending
 * @param {String} key the key of the date
 * @return {Array} array ordered in ascd or desc
 */
export const orderArrayByDate = (array, descending = true, key) => {
	return array.sort((a, b) => {
		if (descending) {
			return new Date(b[key]) - new Date(a[key]);
		}

		return new Date(a[key]) - new Date(b[key]);
	});
};
