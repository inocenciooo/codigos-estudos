let inputs = document.querySelectorAll(".input-text");

inputs.forEach(function (i) {
  i.addEventListener("change", function () {
    if (i.value !== "") {
      i.classList.add("preenchido");
    } else {
      i.classList.remove("preenchido");
    }
  });
});
