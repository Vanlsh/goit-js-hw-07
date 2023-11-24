const registerForm = document.querySelector(".login-form");
const userData = { email: "", password: "" };

const onSubmit = (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email && password) {
    userData.email = email;
    userData.password = password;
    console.log(userData);
    event.target.elements.email.value = "";
    event.target.elements.password.value = "";
  } else {
    alert("All form fields must be filled in");
  }
};

registerForm.addEventListener("submit", onSubmit);
