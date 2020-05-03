/**
 * Create null Object
 * @return {any}
 */
const Obj = Object.create(null);

/**
 * Get Object value
 * @param name
 * @return {*}
 */
function getVal(name){
    return Obj[name];
}

/**
 * Set Object name and value
 * @param name
 * @param value
 * @return {*}
 */
function setVal(name, value){
    Obj[name] = value;
    return value;
}

module.exports = {
    getVal: getVal,
    setVal: setVal
}
