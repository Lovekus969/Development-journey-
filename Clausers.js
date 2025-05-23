function demo() {
  var x;            // hoisted declaration
  console.log(x);   // undefined (because x is declared but not assigned yet)
  x = 7;
  console.log(x);   // 7
}

const fruits = ['apple', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); //  { apple: 2, banana: 1 }
//. Count Frequency of Elements
// Input: ['apple', 'banana', 'apple']
// Goal: { apple: 2, banana: 1 }
