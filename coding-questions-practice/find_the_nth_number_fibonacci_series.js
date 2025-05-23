//? find the nth number fibonacci number

//* approach -1 (recursive approach)
//* TC - O(2^n) S - O(n)

function fibonacciSeries(number) {
  if (number < 2) return number;
  return fibonacciSeries(number - 1) + fibonacciSeries(number - 2);
}

console.log(fibonacciSeries(8));

//* approach -2 (iterative approach)
//* TC - O(n) SC-O(1)
function findFibonacci(number) {
  if (number < 2) return number;
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= number; i++) {
    [prev, current] = [current, prev + current];
    //* or
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

console.log(findFibonacci(8)); //21

//* approach 3 - memoized recursive function
//* TC - O(n) SC - O(n)
function findFibonacci(number, memo = {}) {
  if (number < 2) return number;
  if (memo[number]) {
    return memo[number];
  } else {
    memo[number] =
      findFibonacci(number - 1, memo) + findFibonacci(number - 2, memo);
    return memo[number];
  }
}

console.log(findFibonacci(8))