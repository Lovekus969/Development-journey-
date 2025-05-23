const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 👉 15
