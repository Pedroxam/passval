/**
 * Object Method
 * @type {any}
 */
let obj = Object.create(null);

/**
 * Local Method
 * @type {Storage}
 */
let ls  = window.localStorage;

/**
 * Set name and value
 * @param name
 * @param value
 * @return {*}
 */
function setVal (name, value) {
	obj[name] = value;
	ls.setItem(name, value);
	return true
}

/**
 * Get value
 * @param name
 * @return {*}
 */
function getVal (name) {
	return (obj[name] !== undefined) ? obj[name] : ls.getItem(name);
}

/**
 * Delete value
 * @param name
 * @return {*}
 */
function delVal (name) {
	obj[name] = null;
	ls.removeItem(name);
}

module.exports = {
	getVal: getVal,
	setVal: setVal,
	delVal: delVal
}
