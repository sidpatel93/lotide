const eqArrays = (arr1, arr2) =>{
  if (arr1.length  !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let i in obj1) {
    // check if the value is array or not
    if (Array.isArray(obj1[i])) {
      // if value is array then check for equality
      if (!eqArrays(obj1[i], obj2[i])) return false;
    } else {
      if (obj1[i] !== obj2[i]) return false;
    }
  }
  return true;
};


const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);