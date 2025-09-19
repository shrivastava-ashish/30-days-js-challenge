const checkPalindrome = () => {
    const input = document.getElementById('input');
    
    const inputText = input.value;
    
    const result = document.getElementById('result');

    result.classList.remove('true', 'false');

    if(inputText.trim() === '') {
        result.textContent = `Please enter a valid sentence`;
        return;
    }

    const cleanedString = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = inputText.split('').reverse().join('');

    let res;

    if(cleanedString === reversedString) {
        result.textContent = `It is a palindrome! ✅`;
        res = true;
    } else {
        result.textContent = `It is not a palindrome! ❌`;
        res = false;
    }

    if(res) {
        result.classList.toggle('true');
        res = null;
    } else {
        result.classList.toggle('false');
        res = null;
    }
}