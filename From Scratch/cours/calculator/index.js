const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
let newresult = result.textContent;

console.log(newresult);

// ---- Pour que les numéros ne s'écrase pas mais s'ajoute utiliser a la place de = utiliser +=

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
