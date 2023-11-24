function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const placeToShowColor = document.querySelector(".color");

const handelChangeColor = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  placeToShowColor.textContent = newColor;
};

changeColorButton.addEventListener("click", handelChangeColor);
