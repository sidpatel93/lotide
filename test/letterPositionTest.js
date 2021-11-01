const assertArraysEqual = require('../assertArraysEqual')
const letterPosition = require('../letterPosition')

//console.log(letterPosition('lighthouse in the house'));

let returnedVal = letterPosition('hello');
assertArraysEqual(returnedVal["h"], [0]);
assertArraysEqual(returnedVal["e"], [1]);
assertArraysEqual(returnedVal["l"], [2,3]);
assertArraysEqual(returnedVal["o"], [4]);
