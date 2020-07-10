class localStorageService {
    ls = window.localStorage;
	
	Obj = Object.create(null);

	/**
	 * Set name and value
	 * @param name
	 * @param value
	 * @return {*}
	 */
    setVal(name, value) {
		this.Obj[name] = value;
        this.ls.setItem(name, value);
        return true
    }
	
	/**
	 * Get value
	 * @param name
	 * @return {*}
	 */
    getVal(name) {
		try {
			return this.Obj[name];
		} catch (e) {
			return this.ls.getItem(name) ? this.ls.getItem(name): null;
		}
    }

	/**
	 * Delete value
	 * @param name
	 * @return {*}
	 */
    delVal(name) {
		this.Obj[name] = null;
        this.ls.removeItem(name);
    }
}

module.exports = {
    getVal: getVal,
    setVal: setVal,
	delVal: delVal
}
