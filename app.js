
//Arrays in script is Mutable 
let array = ["strome", "tsunami", "mango"];
array[0] = "badboy";
console.log(array); // ["badboy", "tsunami", "mango"]
let arr = [1, 2];
arr[5] = 99;
console.log(arr);       // [1, 2, <3 empty items>, 99]
console.log(arr.length); // 6
