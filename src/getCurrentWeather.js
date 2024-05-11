async function getCurrentWeather(place) {
  try {
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
  } catch (err) {
    alert(err);
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e9c674b0342042a48b0160004240505&q=Moscow`,
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
}

export { getCurrentWeather };
