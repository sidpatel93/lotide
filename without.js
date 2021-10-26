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

const without = (source, itemsToRemove) => {
  let finalArray = [];
  for (let e of source) {
    if (!itemsToRemove.includes(e)) finalArray.push(e);
  }
  return finalArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1,2,3], []), [1,2,3]);
assertArraysEqual(without([1], [1]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);