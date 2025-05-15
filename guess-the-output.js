//* 1.

const obj1 = { first: 20, second: 30, first: 50 };
console.log(obj1);
// Output: { first: 50, second: 30 }
// Explanation: The last value given to the first property replaces the one before it. This happens because JavaScript objects can change, and if you set the same property more than once, the last one wins. That’s why the result is { first: 50, second: 30 }.

//* 2.
console.log(typeof NaN); // number
// Explanation: NaN is a number, so typeof NaN returns "number".
