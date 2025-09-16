let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");
let listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue) {
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    listContainer.prepend(li);
    input.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  } else {
    alert("Input must be a valid string.");
  }
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();