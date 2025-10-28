const container = document.querySelector(".container");
const loaderContainer = document.querySelector(".loader-container");

let imageCount = 0;
const imagePerLoad = 10;
let isLoading = false;

function loadImage(count) {
  isLoading = true;
  loaderContainer.classList.add("loader-active");

  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      const imageCard = document.createElement("div");
      imageCard.className = "image-card";

      const img = document.createElement("img");
      img.src = `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/150/100`;
      img.alt = "Random image";

      const p = document.createElement("p");
      p.className = "caption";
      p.textContent = `Image ${imageCount + 1}`;

      imageCard.appendChild(img);
      imageCard.appendChild(p);

      container.appendChild(imageCard);
      imageCount++;
    }
    isLoading = false;
    loaderContainer.classList.remove("loader-active");
  }, 500);
}

function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function checkAndLoad() {
  const { scrollTop, scrollHeight, clientHeight } = container;

  const threshold = 50;

  if (scrollTop + clientHeight >= scrollHeight - threshold && !isLoading) {
    loadImage(imagePerLoad);
  }
}

container.addEventListener("scroll", debounce(checkAndLoad, 50));

loadImage(imagePerLoad);
