const assertEqual = (actual, expected) => {
  if (actual === expected) console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('hello' , 'hello');
assertEqual('Hi', 'hi');
assertEqual('25', 25);