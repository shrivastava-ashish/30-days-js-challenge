const btn = document.getElementById("btn");
const ageInput = document.getElementById("age");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const genderLabels = document.querySelectorAll(".gender label");
const resultDiv = document.getElementById("result");

genderInputs.forEach((input) => {
  input.addEventListener("change", () => {
    genderLabels.forEach((label) => label.classList.remove("selected"));
    input.parentElement.classList.add("selected");
  });
});

function getSelectedGender() {
  let selected = null;
  genderInputs.forEach((input) => {
    if (input.checked) {
      selected = input.value;
    }
  });
  return selected;
}

btn.addEventListener("click", () => {
  const age = parseInt(ageInput.value);
  const height = parseFloat(heightInput.value) / 100;
  const weight = parseFloat(weightInput.value);
  const gender = getSelectedGender();

  if (!height || !weight || !age || !gender) {
    alert("Please select gender and fill in all fields.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let category = "";
  if (gender === "male") {
    if (bmi < 20) category = "Underweight (Male)";
    else if (bmi < 25) category = "Normal (Male)";
    else if (bmi < 30) category = "Overweight (Male)";
    else category = "Obese (Male)";
  } else {
    if (bmi < 19) category = "Underweight (Female)";
    else if (bmi < 24) category = "Normal (Female)";
    else if (bmi < 29) category = "Overweight (Female)";
    else category = "Obese (Female)";
  }

  resultDiv.innerHTML = `<h4>BMI: ${bmi}</h4>`;
  resultDiv.innerHTML += `<h4>Category: ${category}</h4>`;
});
