const assertArraysEqual = require('../assertArraysEqual')
const map = require('../map')

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1, 2, 3, 4, 5], (x) => x * 2), [2, 4, 6, 8, 10]);