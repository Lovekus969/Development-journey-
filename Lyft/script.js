const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
    console.log("Hover started 🔥");
});

logo.addEventListener("mouseout", () => {
    console.log("Hover ended 👌");
});
