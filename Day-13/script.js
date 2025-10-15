const fromAmountElement = document.getElementById("fromAmount");
const toAmountElement = document.getElementById("toAmount");
const fromCurrencyElement = document.getElementById("fromCurrency");
const toCurrencyElement = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convert");
const resetBtn = document.getElementById("reset");

const key = "c433cb3421721198d0cc7731";

convertBtn.addEventListener("click", getExchangeRate);

async function getExchangeRate() {
  const fromAmount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  if (fromAmountElement.value === "" || isNaN(fromAmount) || fromAmount <= 0) {
    alert("Please enter a valid amount!");
  } else if (fromCurrency === "") {
    alert("Please select a currency to convert from!");
  } else if (toCurrency === "") {
    alert("Please select a currency to convert to!");
  } else {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/c433cb3421721198d0cc7731/pair/${fromCurrency}/${toCurrency}/${fromAmount}`
      );
      const data = await response.json();
      console.log(data);

      toAmountElement.value =
        Math.round((data.conversion_result + Number.EPSILON) * 100) / 100;
    } catch (error) {
      console.error(error);
    }
  }
}

resetBtn.addEventListener("click", resetFields);

function resetFields() {
  fromAmountElement.value = "";
  toAmountElement.value = "";
  fromCurrencyElement.value = "";
  toCurrencyElement.value = "";
}
