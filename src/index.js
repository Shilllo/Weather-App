import "./style.css";

async function loadInfo(place) {
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
}

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", function () {
  if (document.querySelector("input").value) {
    loadInfo(document.querySelector("input").value);
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
      loadInfo(document.querySelector("input").value);
    }
  }
});
