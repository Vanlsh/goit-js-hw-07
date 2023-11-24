function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

const handleChangeColor = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
};

changeColorButton.addEventListener("click", handleChangeColor);
