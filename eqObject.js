const eqArrays = require('./eqArrays')

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let i in obj1) {
    // check if the value is array or not
    if (Array.isArray(obj1[i])) {
      // if value is array then check for equality
      return eqArrays(obj1[i], obj2[i]);
    } else if (typeof obj1[i] === 'object') {
      return eqObjects(obj1[i], obj2[i]);
    } else {
      if (obj1[i] !== obj2[i]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;
