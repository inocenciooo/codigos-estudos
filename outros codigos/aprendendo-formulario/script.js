const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checarUsername();
  checarPassword();
  checarEmail();
  checarConfirmacaoSenha();
});

function checarUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    erroInput(username, "Você precisa informar um nome de usuário.");
  } else {
    username.parentElement.className = "form-content";
  }
}

function checarEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    erroInput(email, "O campo de e-mail é obrigatório.");
  } else {
    email.parentElement.className = "form-content";
  }
}

function checarPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    erroInput(password, "A senha não pode ficar em branco.");
  } else if (passwordValue.length < 6) {
    erroInput(password, "Informe uma senha com pelo menos 6 caracteres.");
  } else {
    password.parentElement.className = "form-content";
  }
}

function checarConfirmacaoSenha() {
  const confimacaoSenhaValue = passwordConfirmation.value;

  if (confimacaoSenhaValue === "") {
    erroInput(confimacaoSenhaValue, "Por favor, confirme sua senha.");
  }
}

function erroInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content error";
}
