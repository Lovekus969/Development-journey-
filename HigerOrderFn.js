// What is a Higher-Order Function?
function hof(callback) {
    // takes a function as argument
    return callback();
}

function sayHello() {
    return "Hello from FAANG!";
}

console.log(hof(sayHello)); // Output: Hello from FAANG!
//Examples of Higher-Order Functions in JavaScript:

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]  // Map()
//use arrow functions when mapping in JavaScript.
//Arrow functions offer a shorter and cleaner syntax, especially useful in functional methods like map, filter, reduce, etc.


