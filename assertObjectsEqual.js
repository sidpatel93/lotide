const eqObject = require('./eqObject')

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObject(obj1, obj2)) console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

module.exports = assertObjectsEqual;
