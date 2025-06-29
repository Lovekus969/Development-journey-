// Select button
let button = document.querySelector("button");

// Add click event
button.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let box = document.querySelector(".color-box");

  let color = getRandomColor();
  h3.innerText = color;
  box.style.backgroundColor = color;

  console.log("New color is:", color);
});

// Generate random RGB color
function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
