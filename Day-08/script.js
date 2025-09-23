const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileNoInput = document.getElementById('mobileNo');
const ageInput = document.getElementById('age');
const errorMsg = document.getElementById('errorMsg');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const mobileNo = mobileNoInput.value.trim();
    const age = ageInput.value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const agePattern = /^[0-9]+$/;

    if(!namePattern.test(name)) {
      errorMsg.textContent = "Please enter a valid name (letters only).";
      return;
    }

    if(!emailPattern.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    if(!mobilePattern.test(mobileNo)) {
      errorMsg.textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }

    if(!agePattern.test(age)) {
        errorMsg.textContent = "Please enter a valid age.";
        return;
    }

    errorMsg.textContent = "";
    alert("Form submitted successfully!"); 
    form.reset();
})