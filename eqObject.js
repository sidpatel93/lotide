const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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


// Test Cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const test1 = {a: 3, b: 5};
const test2 = {a: "3", b: "5"};
assertEqual(eqObjects(test1, test2), false);

const test3 = {};
const test4 = {};
assertEqual(eqObjects(test3, test4), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false