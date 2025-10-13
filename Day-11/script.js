const search = document.getElementById("search");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.querySelector(".description");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (search.value != "") {
    searchWeather();
  }
});

const id = "4868ab97b4d8ad75848c205bf34dff4f";
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}`;

const searchWeather = () => {
  fetch(url + "&q=" + search.value)
    .then((responsive) => responsive.json())
    .then((data) => {
      if (data.cod == 200) {
        city.querySelector("figcaption").innerText = data.name;
        city.querySelector(
          "img"
        ).src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        temperature.querySelector(
          "img"
        ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.querySelector("figcaption span").innerText = Math.floor(
          data.main.temp
        );
        description.innerText = data.weather[0].description.toUpperCase();
        wind.innerText = Math.floor(data.wind.speed);
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
      } else {
        main.classList.add("error");
        setTimeout(() => {
          main.classList.remove("error");
        }, 1000);
      }

      search.value = "";
    });
};

const initApp = () => {
  search.value = "New Delhi";
  searchWeather();
};

initApp();