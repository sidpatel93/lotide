const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = (inputString) => {
  let result = {};
  for (let e of inputString) {
    if (isLetter(e)) {
      if (result[e]) {
        result[e] += 1;
      } else {
        result[e] = 1;
      }
    }
  }
  return result;
};

const isLetter = (a) => {
  return (a.toLowerCase() !== a.toUpperCase());
};


console.log(countLetters("lighthouse in the house"));