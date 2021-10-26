const eqArrays = (arr1, arr2) =>{
  if (arr1.length  !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if(eqArrays(arr1, arr2)) console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}

const isvalidArr = (arr) => {
  if(arr.length >= 3) return true
  else return false
}


const middle = (arr) => {
  let arrToreturn = []
  if(isvalidArr(arr)){
    if(arr.length % 2 === 0){
      arrToreturn.push(arr[(arr.length/2) - 1])
      arrToreturn.push(arr[arr.length/2])
    }
    else{
      arrToreturn.push(arr[Math.floor(arr.length/2)])
    }
  }
  return arrToreturn
}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])