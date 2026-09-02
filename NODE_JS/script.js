console.log("Script is running...");

import * as fs from "./math.js";

const result = fs.add(5, 10);
console.log("The result of addition is: " + result);

const subtractResult = fs.subtract(10, 5);
console.log("The result of subtraction is: " + subtractResult);