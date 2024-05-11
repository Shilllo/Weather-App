import "./style.css";
import { moveLeft, moveRight } from "./slider.js";
import { showCurrentWeather } from "./getCurrentWeather.js";
import { showHourWeather } from "./getHourWeather.js";
import { getData } from "./getData.js";

getData("Moscow");
// showCurrentWeather(getData("Moscow"));
// showHourWeather(getData("Moscow"));

document.querySelector("button").addEventListener("click", function () {
  if (document.querySelector("input").value) {
    getData(document.querySelector("input").value);
    // showHourWeather(getData(document.querySelector("input").value));
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
      getData(document.querySelector("input").value);
      // showhourWeather(getData(document.querySelector("input").value));
    }
  }
});

document.querySelector("#left").addEventListener("click", function () {
  moveLeft();
});

document.querySelector("#right").addEventListener("click", function () {
  moveRight();
});
