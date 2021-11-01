const middle = (arr) => {
  let arrToreturn = []
  if(arr.length >=3){
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

module.exports = middle;

