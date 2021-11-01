const without = (source, itemsToRemove) => {
  let finalArray = [];
  for (let e of source) {
    if (!itemsToRemove.includes(e)) finalArray.push(e);
  }
  return finalArray;
};

module.exports = without;
