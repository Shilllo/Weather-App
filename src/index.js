import "./style.css";
import { moveLeft, moveRight } from "./slider.js";

getCurrentWeather("Moscow");
getHourWeather("Moscow");

async function getCurrentWeather(place) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e9c674b0342042a48b0160004240505&q=${place}`,
    { mode: "cors" }
  );
  const data = await response.json();
  let city = document.querySelector("#city");
  let temp_c = document.querySelector("#temperature").children[0];
  let humidity = document.querySelector("#humidity").children[1];
  let windSpeed = document.querySelector("#windSpeed").children[1];
  let pressure = document.querySelector("#pressure").children[1];

  city.textContent = data.location.name;
  temp_c.textContent = data.current.temp_c + "°C";
  humidity.textContent = data.current.humidity;
  windSpeed.textContent = data.current.wind_kph;
  pressure.textContent = data.current.pressure_mb;

  document.querySelector("input").value = "";

  let img = document.querySelector("#icon");
  img.src = data.current.condition.icon;
}

document.querySelector("button").addEventListener("click", function () {
  if (document.querySelector("input").value) {
    getCurrentWeather(document.querySelector("input").value);
    getHourWeather(document.querySelector("input").value);
  }
});

document.querySelector("form").addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    if (document.querySelector("input").value) {
      getCurrentWeather(document.querySelector("input").value);
      getHourWeather(document.querySelector("input").value);
    }
  }
});

async function getHourWeather(place) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=${place}&days=1`,
    { mode: "cors" }
  );
  const data = await response.json();

  let container = document.querySelector("#container");
  container.innerHTML = "";
  let array = data.forecast.forecastday[0].hour;
  for (let i = 0; i <= array.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let time = document.createElement("p");
    time.setAttribute("class", "time");
    time.textContent = array[i].time.slice(-5);
    card.appendChild(time);

    let img = document.createElement("img");
    img.src = array[i].condition.icon;
    card.appendChild(img);

    let hourTemp = document.createElement("p");
    hourTemp.setAttribute("class", "hourTemp");
    hourTemp.textContent = array[i].temp_c + "°C";
    card.appendChild(hourTemp);

    container.appendChild(card);
  }
}

document.querySelector("#left").addEventListener("click", function () {
  moveLeft();
});

document.querySelector("#right").addEventListener("click", function () {
  moveRight();
});

getHourWeather("Moscow");
