const takeUntil = (array, callback) => {
  let output = []

  for(let item of array){
    if(callback(item)){
      return output 
    }
    output.push(item)
  }
  return output
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 5, 6, 9, 8, 4, 3, 6, 5];
const results3 = takeUntil(data3, x => x === 4);
console.log(results3);