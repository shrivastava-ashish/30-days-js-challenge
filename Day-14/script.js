const reset = document.getElementById("reset");
const textarea = document.getElementById("textarea");
const result = document.getElementById("result");
const divider = document.getElementById("divider");
const content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
  const savedMarkdown = localStorage.getItem("markdownInput");
  if (savedMarkdown) {
    textarea.value = savedMarkdown;
    result.innerHTML = marked.parse(savedMarkdown);
  }
});

textarea.addEventListener("input", () => {
  localStorage.setItem("markdownInput", textarea.value);

  if (textarea.value.trim() === "") {
    result.innerHTML = "View your converted markdown here";
  } else {
    const htmlOutput = marked.parse(textarea.value);
    result.innerHTML = htmlOutput;
  }
});

reset.addEventListener("click", () => {
  textarea.value = "";
  result.innerHTML = "View your converted markdown here";

  localStorage.removeItem("markdownInput");
});

let isDragging = false;

divider.addEventListener("mousedown", () => {
  isDragging = true;
  content.style.cursor = "col-resize";
  content.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const containerRect = content.getBoundingClientRect();

  const newMarkdownWidth = e.clientX - containerRect.left;

  const totalWidth = containerRect.width;

  const newMarkdownPercentage = (newMarkdownWidth / totalWidth) * 100;

  document.querySelector(
    ".markdown"
  ).style.flexBasis = `${newMarkdownPercentage}%`;
  document.querySelector(".result").style.flexBasis = `${
    100 - newMarkdownPercentage
  }%`;
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    content.style.cursor = "";
    content.style.userSelect = "";
  }
});