const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "AC") {
      expression = "";
      input.value = "";
      input.classList.remove("small");
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === "=") {
      try {
        const formattedExp = expression.replace(/x/g, "*").replace(/÷/g, "/");
        let result = eval(formattedExp);

        if (result.toString().length > 15) {
          result = result.toExponential(6);
        }

        expression = result.toString();
        input.value = expression;

        if (expression.length > 15) {
          input.classList.add("extraSmall");
        } else if (expression.length > 10) {
          input.classList.add("small");
        } else {
          input.classList.remove("small");
          input.classList.remove("extraSmall");
        }
      } catch {
        input.value = "Error";
        expression = "";
      }
    } else {
      expression += value;
      input.value = expression;
      input.scrollLeft = input.scrollWidth;

      if (expression.length > 15) {
        input.classList.add("extraSmall");
      } else if (expression.length > 10) {
        input.classList.add("small");
      } else {
        input.classList.remove("small");
        input.classList.remove("extraSmall");
      }
    }
  });
});