// var myAge = prompt("how old are you?");

// if (myAge <= 12){
//     alert('Price of a movie ticket  is $10')
// }else if(myAge <= 17){
//     alert('Price of a movie ticket is $15')
// }else{
//     alert('Price of a movie ticket is $20')
// }


function isLeapYear(year) {
    // Leap year conditions:
    // 1. Divisible by 4
    // 2. Not divisible by 100 unless
    // 3. Also divisible by 400
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `this is a leap year`;
    } else {
        return `this is not a leap year`;
    }
}
console.log(isLeapYear(2024));


function fibonacci(n) {
    // Base cases
    if (n === 0) return 0; // First Fibonacci number
    if (n === 1) return 1; // Second Fibonacci number
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(4)); 

function power(base, exponent) {
    // Base case: exponent is 0, any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    
    // Recursive case: exponent > 0
    // If exponent is positive, compute base * base^(exponent-1)
    if (exponent > 0) {
        return base * power(base, exponent - 1);
    }
    
    // If exponent is negative, compute 1 / base * base^(exponent+1)
    if (exponent < 0) {
        return 1 / base * power(base, exponent + 1);
    }
}
