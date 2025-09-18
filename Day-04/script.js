let textDiv = document.getElementById('text');
let btn = document.getElementById("btn");

function changeBgColor() {
  const letter = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  textDiv.innerHTML = color;
  document.body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBgColor);