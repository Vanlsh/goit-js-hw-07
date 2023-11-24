function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const countOfDiv = document.querySelector("#controls input");
const containerOfBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let initialSize = 30;
  containerOfBoxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = initialSize + "px";
    box.style.width = initialSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    containerOfBoxes.appendChild(box);
    initialSize += 10;
  }
};

const create = () => {
  const amount = Number(countOfDiv.value);
  if (amount <= 100 && amount > 0) {
    createBoxes(amount);
    countOfDiv.value = "";
  }
};

const destroyBoxes = () => {
  containerOfBoxes.innerHTML = "";
};

createButton.addEventListener("click", create);
destroyButton.addEventListener("click", destroyBoxes);
