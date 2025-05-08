const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const form = document.getElementById("form");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  checarUsername();
  checarEmail();
  checarSenha();
  checarConfirmacao();
});

function checarUsername() {
  if (username.value === "") {
    erro(username, "Insira um nome de usuário.");
  } else {
    username.parentElement.className = "form-content";
  }
  preenchido(username);
}

function checarEmail() {
  if (email.value === "") {
    erro(email, "Preencha um E-mail.");
  } else {
    email.parentElement.className = "form-content";
  }
  preenchido(email);
}

function checarSenha() {
  if (password.value === "") {
    erro(password, "Escolha uma senha.");
  } else if (password.value.length < 8) {
    erro(password, "Escreva uma senha maior que 8 caracteres.");
  } else {
    password.parentElement.className = "form-content";
  }
  preenchido(password);
}

function checarConfirmacao() {
  if (passwordConfirmation.value === "") {
    erro(passwordConfirmation, "Confirme a sua senha.");
  } else if (passwordConfirmation.value !== password.value) {
    erro(passwordConfirmation, "A senha está diferente.");
  } else {
    passwordConfirmation.parentElement.className = "form-content";
  }
  preenchido(passwordConfirmation);
}

function erro(input, message) {
  const mensagemErro = input.parentElement.querySelector("a");
  input.parentElement.className = "form-content error";
  mensagemErro.innerText = message;
}

function preenchido(input) {
  input.addEventListener("blur", () => {
    input.parentElement.className = "form-content";
  });
}
