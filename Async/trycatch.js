function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // 1 to 10
}

async function checkNumber() {
    const num = getRandomNumber();
    console.log("Generated number:", num);

    if (num > 7) {
        return ` Number ${num} is good to work`;
    } else {
        throw new Error(` Number ${num} is too low`);
    }
}

async function run() {
    try {
        const result = await checkNumber();
        console.log(result);
    } catch (err) {
        console.error("Handled Error:", err.message);
    }

    // Rest of your async code still runs
    await new Promise(res => setTimeout(res, 1000));
    console.log("➡️ Continuing with the rest of the program...");
}

run();
