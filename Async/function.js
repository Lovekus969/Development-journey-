function doWorkWithDelay() {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10) + 1; // 1 to 10
        console.log(`Generated number: ${randomNum}`);

        if (randomNum > 7) {
            console.log(" Number is greater than 7 — work executed!");
        } else {
            throw new Error(" Number is 7 or less — stopping work!");
        }
    }, 2000); // 2000 ms = 2 seconds delay
}

doWorkWithDelay();
