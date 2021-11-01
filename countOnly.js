
const countOnly = (allItems, itemsToCount) => {

  const results = {}

  for(let item of allItems){
    if(results[item]){
      if(itemsToCount[item]){
        results[item] += 1
      }
    }
    else {
      if(itemsToCount[item]){
        results[item] = 1
      }
    }
  }

 console.log(results)
  return results
}

module.exports = countOnly;


