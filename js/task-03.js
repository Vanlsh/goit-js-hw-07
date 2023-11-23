const nameInput = document.querySelector("#name-input");
const showTextElement = document.querySelector("#name-output");

const onChangeName = (event) => {
  const value = event.currentTarget.value.trim();
  showTextElement.textContent = value ? value : "Anonymous";
};

nameInput.addEventListener("input", onChangeName);
