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

const isLetter = (letter) => {
  return (letter.toLowerCase() !== letter.toUpperCase());
};

const letterPosition = (sentence) => {
  
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (isLetter(sentence[i])) {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};


console.log(letterPosition('lighthouse in the house'));

let returnedVal = letterPosition('hello');
assertArraysEqual(returnedVal["h"], [0]);
assertArraysEqual(returnedVal["e"], [1]);
assertArraysEqual(returnedVal["l"], [2,3]);
assertArraysEqual(returnedVal["o"], [4]);
