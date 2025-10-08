const container = document.querySelector(".container");
const imgs = document.querySelectorAll(".img-box");
const btns = document.querySelectorAll("button");

let currentIndex = 0;

function updateCarousel() {
  container.scroll({
    left: imgs[currentIndex].offsetLeft,
    behavior: "smooth",
  });
}

btns[0].addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  updateCarousel();
});

btns[1].addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % imgs.length;
  updateCarousel();
}, 3000);
