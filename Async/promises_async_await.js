
// =====================
// Promises Example
// =====================

// A function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("✅ Data loaded");
            } else {
                reject("❌ Failed to load data");
            }
        }, 2000);
    });
}

// Consuming a Promise with .then() / .catch()
fetchData()
    .then(result => {
        console.log("Promise result:", result);
    })
    .catch(error => {
        console.error("Promise error:", error);
    })
    .finally(() => {
        console.log("Promise finished");
    });

// =====================
// Async/Await Example
// =====================

async function getData() {
    try {
        console.log("Fetching data...");
        const result = await fetchData(); // Wait for the Promise to resolve
        console.log("Async/Await result:", result);
    } catch (error) {
        console.error("Async/Await error:", error);
    } finally {
        console.log("Async function finished");
    }
}

getData();

// =====================
// Multiple Promises in Parallel
// =====================

function task(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${name} finished in ${delay}ms`);
        }, delay);
    });
}

async function runMultipleTasks() {
    console.log("Starting parallel tasks...");
    const [task1, task2] = await Promise.all([
        task("Task 1", 1000),
        task("Task 2", 1500)
    ]);
    console.log(task1);
    console.log(task2);
    console.log("All tasks done!");
}

runMultipleTasks();
