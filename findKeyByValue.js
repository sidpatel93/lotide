
const findKeyByValue = (obj, value) => {
  for (let i in obj) {
    if (obj[i] === value) return i;
  }
  return undefined;
};

module.exports = findKeyByValue;
