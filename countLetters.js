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

module.exports = countLetters

