const map = (array, callback) => {

  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};


//helper function to test code

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

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1, 2, 3, 4, 5], (x) => x * 2), [2, 4, 6, 8, 10]);