//* 1.

const obj1 = { first: 20, second: 30, first: 50 };
console.log(obj1);
// Output: { first: 50, second: 30 }
// Explanation: The last value given to the first property replaces the one before it. This happens because JavaScript objects can change, and if you set the same property more than once, the last one wins. That’s why the result is { first: 50, second: 30 }.

//* 2.
console.log(typeof NaN); // number
// Explanation: NaN is a number, so typeof NaN returns "number".

//* 3.
var a = true + true + true * 3;
console.log(a); // 5
// Explanation: In JavaScript, true is equal to 1 and false is equal to 0. So, true + true + true * 3 is equal to 1 + 1 + 3 * 1, which is equal to 1 + 1 + 3, which is equal to 5. and multiplication operator have higher precedence than addition operator, so first 3 * 1 = 3 then addition (1+1+3) = 5.

//* 4.

let a = [1, 2, 3, 4, 5];
console.log(a.slice(2, 4)); // [3, 4]
// Explanation: The slice() method returns a shallow copy of a portion of an array. It takes two parameters: (start, end), the **start** index is included, but the **end** index is not.So, `a.slice(2, 4)` means take items from index 2 **up to** (but not including) index 4.If the array is `[1, 2, 3, 4, 5]`, this will return `[3, 4]` (the items at index 2 and 3).

//* 5.

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(b); // 4,10,18
}
/*
Iteration cycle :-
iteration 1 :- a = 1, b = 0
while (a <= 3) { // true
  a++; // a = 2
  b += a * 2; // b = 0 + 2 * 2 = 4
  console.log(b); // 4
}

iteration 2 :- a = 2, b = 4
while (a <= 3) { // true
    a++; // a = 3
    b += a * 2; // b = 4 + 3 * 2 = 10
    console.log(b); // 4,10

iteration 3 :- a = 3, b = 10 
    while (a <= 3) { // true 
    a++; // a = 4 
    b += a * 2; // b = 10 + 4 * 2 = 18
console.log(b); // 4,10,18

*/
