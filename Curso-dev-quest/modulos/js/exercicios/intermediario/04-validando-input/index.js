let inputText = document.querySelectorAll(".input-text");

inputText.forEach(input => {
  input.addEventListener("change", () => {
    if (input.value !== "") {
      input.classList.add("preenchido");
    } else {
      input.classList.remove("preenchido");
    }
  });
});
