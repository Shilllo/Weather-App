import "./style.css";
import { moveLeft, moveRight } from "./slider.js";
import { getCurrentWeather } from "./getCurrentWeather.js";
import { getHourWeather } from "./getHourWeather.js";

getCurrentWeather("Moscow");
getHourWeather("Moscow");

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

document.querySelector("#left").addEventListener("click", function () {
  moveLeft();
});

document.querySelector("#right").addEventListener("click", function () {
  moveRight();
});
