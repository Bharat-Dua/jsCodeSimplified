//* check if a number is prime or not

function isPrime(number) {
    if (number <= 1) return false;
    if (number <=3) return true;
    for (let i = 2; i < Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(10))
console.log(isPrime(5))
console.log(isPrime(1))
console.log(isPrime(100))