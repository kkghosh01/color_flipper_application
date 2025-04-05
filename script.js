const button = document.querySelector(".btn");
const resetButton = document.querySelector(".reset-btn");
const colorHistory = document.querySelector(".color-history");
const pressKey = document.body;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBackground = () => {
  const newColor = getRandomColor();
  document.body.style.transition = "background-color 0.5s ease-in-out";
  document.body.style.backgroundColor = newColor;

  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = newColor;
  colorBox.addEventListener("click", () => {
    document.body.style.backgroundColor = newColor;
  });
  colorHistory.appendChild(colorBox);
};

button.addEventListener("click", changeBackground);

pressKey.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    changeBackground();
  }
});

resetButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  colorHistory.innerHTML = "";
});
