
const flatten = (arr) => {
  let outputArr = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      for (let i of e) {
        outputArr.push(i);
      }
    } else outputArr.push(e);
  }
  return outputArr;
};

module.exports = flatten;

