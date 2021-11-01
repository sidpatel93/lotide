const takeUntil = (array, callback) => {
  let output = [];

  for (let item of array) {
    if (callback(item)) {
      return output;
    }
    output.push(item);
  }
  return output;
};

module.exports = takeUntil;

