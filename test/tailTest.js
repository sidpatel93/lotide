const assertEqual = require('../assertEqual')
const tail = require('../tail')


//Test 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test 2
const result1 = tail(["Hello"]);
assertEqual(result1.length, 0);
assertEqual(result1[0], undefined);

//Test 3
const result2 = tail([]);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);