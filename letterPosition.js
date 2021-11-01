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

module.exports = letterPosition;
