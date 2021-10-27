const takeUntil = (array, callback) => {
  let output = [];
  let flag = true;
  array.forEach((item) => {
    //console.log(item)
    //console.log(callback(item))
    if (callback(item)) {
      //Exit out of the callback and
      flag = false;
    } else if (!callback(item) && flag) {
      output.push(item);
    }
  });
  return output;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);