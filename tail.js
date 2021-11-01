const assertEqual = require('./assertEqual')

const tail = (inputArray) => {
  if (inputArray.length <= 1) {
    return [];
  } else return inputArray.slice(1);
};

module.exports = tail;

