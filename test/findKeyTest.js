const assertEqual = require('../assertEqual')
const findKey = require('../findKey')

// Test Cases
let data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data, x => x.stars === 2), "noma");
assertEqual(findKey(data, x => x.stars >= 3), "Akaleri");