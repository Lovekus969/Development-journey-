const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

p.then(value => {
    console.log("First then:", value); // 10
    return value * 2;
})
.then(value => {
    console.log("Second then:", value); // 20
    return value + 5;
})
.then(value => {
    console.log("Third then:", value); // 25
});
