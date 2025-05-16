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

//* 6.

console.log(NaN === NaN); // false
// Explanation: NaN is the only value in JavaScript that is not equal to itself. This is because NaN is a special value that represents an invalid or unreliable result, and NaN is part of the number type in JavaScript, but it doesn't act like a regular number. So, NaN === NaN returns false.

//* 7.
console.log(1 + "1" - 1); // 10
// Explanation: In JavaScript, when you add a number and a string, JavaScript will concat the string to the number. So, "1" is concatenated to 1, resulting in "11". Then, 1 is subtracted from "11", resulting in 10. So, "11" - 1 is equal to 10.

//* 8.
console.log({} + []); // "[object object]"
// Explanation: In JavaScript, when you add an object and an array, JavaScript will convert the object to a string and the array to a string. The string representation of an object is "[object object ]", and the string representation of an array is "". So, "[object object]" + "" is equal to "[object object]".

//* 9.
let x = "Hello";
let y = "World";
console.log(x + " " + y); // "Hello World"

//* 10.
let i = 0;
while (i < 3) {
  console.log(i); // infinite loop
}
// Explanation: The while loop will continue to run indefinitely because the condition i is always true.This is because i is initialized to 0, and the condition will always be true because i is never incremented or decremented. So, the loop will run indefinitely, printing 0 , 0, 0, and so on.

//* 11.
var a;
document.getElementById("demo").innerHTML = a + 1; // undefined + 1 = NaN
// Explanation: In JavaScript, when you try to add a variable that is not defined, JavaScript will return NaN (Not a Number). So, a + 1 is equal to NaN. The variable a is not defined, so it is undefined, and undefined + 1 is equal to NaN.

//* 12.
var a = 10 + 20 + "5";
document.getElementById("demo").innerHTML = a; // 30 + "5" = "305"
// Explanation: In JavaScript, when you add a number and a string, JavaScript will concat the string to the number. So, "5" is concatenated to 30, resulting in "305".

//* 13.
var ab = 10 + 20 * 5;
document.getElementById("tes").innerHTML = ab; // 10 + 100 = 110
// Explanation: In JavaScript, when you add a number and a number, JavaScript will add the numbers . So, 10 + 100 is equal to 110. The multiplication is evaluated first, resulting in 100, and then 10 is added to 100 , resulting in 110. So, 10 + 20 * 5 is equal to 110. and multiplication operator have higher precendence.

//* 14.
let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x); // [1, 2, 3, 4]
// Explanation: In JavaScript, when you assign an array to a new variable, the new variable is a reference to the original array. So, y is a reference to x, and when you push 4 to y, you are also pushing 4 to x. So, x is also updated to [1, 2, 3, 4].

//* 15.
let a = 10;
let b = "10";
console.log(a == b); // true
// Explanation: In JavaScript, when you compare a number and a string using the == operator, JavaScript will convert the string to a number. So, "10" is converted to 10, and 10 is equal to 10. So, a == b is true.

//* 16.
let c = 10;
c = c + 5; // 15

//* 17.
console.log(1 + "1" - 1); // 1 + "1" = "11" and "11" - 1 = 10
// Explanation: In JavaScript, when you add a number and a string, JavaScript will concat the string to the number. So, "1" is concatenated to 1, resulting in "11". Then, "11" is subtracted by 1, resulting in 10. So, 1 + "1" - 1 is equal to 10.

//* 18.
let obj = { name: "John" };
let obj2 = obj;
obj2.name = "Doe";
console.log(obj.name); // "Doe"
// Explanation: In JavaScript, when you assign an object to a new variable, the new variable is a reference to the original object. So, obj2 is a reference to obj, and when you update obj2.name, you are also updating obj.name. So, obj.name is also updated to "Doe".

//* 19.
let x = [1, 2, 3];
let y = [...x];
y.push(4);
console.log(x); // [1, 2, 3]
// Explanation: In JavaScript, when you use the spread operator to create a new array, the new array is a copy of the original array. So, y is a copy of x, and when you push 4 to y, you are not updating x. So, x is still [ 1, 2, 3].

//* 20.
let obj = { name: "Alice" };
let keys = Object.keys(obj);
console.log(keys); // ["name"]
// Explanation: In JavaScript, the Object.keys() method returns an array of a given object's own enumerable property names. So, Object.keys(obj) returns an array with the key "name".
