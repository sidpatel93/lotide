const eqArrays = (arr1, arr2) =>{
  if (arr1.length  !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const flatten = (arr) => {
  let outputArr = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      for (let i of e) {
        outputArr.push(i);
      }
    } else outputArr.push(e);
  }
  return outputArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([2, 3, 4, 5, [6]]), [2, 3, 4, 5, 6]);
assertArraysEqual(flatten([5]), [5]);
assertArraysEqual(flatten([]), []);