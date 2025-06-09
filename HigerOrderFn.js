// What is a Higher-Order Function?
function hof(callback) {
    // takes a function as argument
    return callback();
}

function sayHello() {
    return "Hello from FAANG!";
}

console.log(hof(sayHello)); // Output: Hello from FAANG!

