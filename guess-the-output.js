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

//* 21.
const data1 = {
  d: "javascript",
};
const data2 = {
  d: "javascript",
};

console.log(data1 === data2); // false

// Explanation: In JavaScript, when you compare two objects using the === operator, JavaScript will compare their references. So, data1 and data2 are two different objects, and their references are also different.So, data1 === data2 is false.

//* 22.
let a = 5;
let b = a;
b = 10;
console.log(a); // 5
// Explanation: In JavaScript, when you assign a primitive type value to a new variable, the new variable is a copy of the original value. So, b is a copy of a, and when you update b to 10, you are not updating a. So, a is still 5.

//* 23.
let x = "5";
x++;
console.log(x); // 6
// Explanation: In JavaScript, when you use the ++ operator on a string, JavaScript will convert the string to a number using ToNumber(x) method and then increment it. So, "5" is converted to 5, and then 5 is incremented to 6. So, x is 6.
/* for x++ behind the scenes algo 
temp = ToNumber(x); 
x = temp + 1;       
return temp;        
*/

//* 24.
console.log("5" - 3); // 2
// Explanation: In JavaScript, when you use the - operator on a string, JavaScript will convert the given string to a number using ToNumber(x) method and then subtract 3 from it. So, "5" is converted to 5, and then 5 - 3 is 2. So, the result is 2.

//* 25.
let x = 10;
let y = 20;
let result = x < y ? x + y : x - y;
console.log(result); // 30
// Explanation: In JavaScript, the ternary operator (?:) is a shorthand for if-else statement.

//* 26.
let a = 5;
let b = 8;
let result = a == b ? "Equal" : a > b ? "Greater" : "Smaller";
console.log(result); // "Smaller"
// here we are doing nested condition check using ternary operator.

//* 27.
const x = 5;
const y = 10;
const result =
  x > y ? "Y is greater" : y > x ? "X is greater" : "Both are equal";
console.log(result); // "X is greater"
// here we are doing nested condition check using ternary operator.

//* 28.
const age = 25;
const status = age < 18 ? "Minor" : age < 65 ? "Adult" : "Senior";
console.log(status); // "Adult"

//* 29.
let a = 15;
if (a > 10) {
  if (a < 20) {
    console.log("Between 10 and 20"); // This will be printed
  } else {
    console.log("Greater than or equal to 20");
  }
} else {
  console.log("Less than or equal to 10");
}

//* 30.
let num = 4;
if (num % 2 === 0) {
  if (num === 4) {
    console.log("Even and equals 4"); // This will be printed
  } else {
    console.log("Even but not 4");
  }
} else {
  console.log("Odd number");
}

//* 31.
const person = {
  name: "John",
  age: 30,
};

console.log(Object.keys(person)); // ["name", "age"]

//* 32.
const obj = { a: 1, b: 2 };
const clone = obj;
clone.a = 3;
console.log(obj.a); // 3
// here we are doing object cloning using assignment operator. and changing the value of the cloned object also changes the original object. because both are pointing to the same memory location. and we know objects are passed by reference in JavaScript.

//* 33.
const obj = {
  name: "John",
  age: 30,
};

console.log("age" in obj); // true
// here we are checking if the property "age" exists in the object. using the in operator we use in operator to check if a property exists in an object. it returns true if the property exists and false if it does not.

//* 34.
const person = { name: "Alice", age: 25 };
delete person.age;
console.log(person.age); // undefined
// here we are deleting the property "age" from the object using the delete operator. and then we are trying to access the deleted property. and it returns undefined. because the property has been deleted from the object. and we know objects are mutable in JavaScript. and we can delete properties from objects using the delete operator. and delete operator returns true if it delete a property.

//* 35.
const obj = {
  name: "Bob",
  greet: function () {
    return `Hello, ${this.name}!`;
  },
};

console.log(obj.greet()); // Hello, Bob!
// here we are accessing the method "greet" from the object using the dot notation. and the value of this is pointing to the object itself. and we know this keyword in JavaScript is a reference to the current execution context. and it is used to access the properties of the current execution context. so in this case, this is pointing to the object itself. and we are accessing the property 'greet' and returns the value of the function. and we are logging the result to the console. and it prints "Hello, Bob!".

//* 36.
let familyMembers = ["mahesh", "niharika", "harsh", "mamta"];

familyMembers = familyMembers.map((name) => {
  return name + " Kumawat";
});

console.log(familyMembers); // ["mahesh Kumawat", "niharika Kumawat", "harsh Kumawat", "mamta Kumawat"]

//* 37.
const arr = [1, 2, 3, 4, 5];

console.log(
  arr.map((vars) => {
    return vars;
  })
); // [1, 2, 3, 4, 5]

//* 38.
var count = 0;
while (count < 10) {
  console.log(count); // 0,1,2,3,4,5,6,7,8,9
  count++;
}

//* 39.
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // 15

//* 40.
const arr = [90, 70, 50, 30, 200, 300, 130];
let max = arr[0];
for (i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max); // 300

//* 41.
const arr = [90, 70, 50, 30, 200, 300, 130];
let min = arr[0];
for (i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min); // 30

//* 42.
function sayHello() {
  console.log("Hello!"); // Hello!
}
let greet = sayHello;
greet();
// Becuase here we are calling the function sayHello which is stored in the variable greet. So it will print "Hello!"

//* 43.
function istrue(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(istrue(2)); // false

//* 44
let data1 = {
  d: "Jaipur",
};
data1 = {
  d: "City",
};
console.log(data1 === data1); // true
// because here we are reassigning the value of data1 to a new object. So it will print true. and it's comparing to itself. So it will print true.

//* 45.
const str = "hello";

for (const char in str) {
  console.log(char); // 0 1 2 3 4
}
// because here we using forin loop over string. So it will print the index of the string. Not the character. because forin loop is used to iterate over the properties of an object. And string is also an object in JavaScript . So it will print the index of the string. Not the character.and we know forin loop is use to loop over enumerable property keys of an object.

//* 46.
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

//* 47.
const obj = { name: "John", age: 30 };
const newObj = { ...obj };
console.log(newObj); // { name: "John", age: 30 }

//* 48.
const obj1 = { name: "John", age: 30 };
const obj2 = { age: 35 };
const updatedObj = { ...obj1, ...obj2 };
console.log(updatedObj); // { name: "John", age: 35 }
// when we are using an spread operator to merge an object and if the object have the same property the last one will be override. So here age will be 35. not 30.
