const amountInput = document.getElementById("amount");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTipInput = document.getElementById("tip");
const totalTipDisplay = document.getElementById("show-tip");
const totalBillDisplay = document.getElementById("show-bill");
const resetButton = document.getElementById("reset");

let currentTipPercent = 0;

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentTipPercent = parseFloat(btn.textContent.replace("%", ""));
    customTipInput.value = "";

    calculateTip();
  });
});

customTipInput.addEventListener("input", () => {
  currentTipPercent = parseFloat(customTipInput.value) || 0;
  calculateTip();
});

amountInput.addEventListener("input", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(amountInput.value);
  if (!billAmount || billAmount <= 0) {
    alert("Please enter bill value!");
    totalTipDisplay.textContent = "0.00";
    totalBillDisplay.textContent = "0.00";
    return;
  }

  const tipAmount = (billAmount * currentTipPercent) / 100;
  const total = billAmount + tipAmount;

  totalTipDisplay.textContent = tipAmount.toFixed(2);
  totalBillDisplay.textContent = total.toFixed(2);
}

resetButton.addEventListener("click", () => {
  amountInput.value = "";
  customTipInput.value = "";
  currentTipPercent = 0;
  totalTipDisplay.textContent = "0.00";
  totalBillDisplay.textContent = "0.00";
});