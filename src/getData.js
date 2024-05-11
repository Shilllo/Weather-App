async function getData(place) {
  try {
    // CURRENT WEATHER
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=${place}&days=3`,
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

    // HOUR WEATHER
    let container = document.querySelector("#container");
    container.innerHTML = "";

    let array = data.forecast.forecastday[0].hour;

    for (let i = 0; i < array.length; i++) {
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

    // 3 DAYS FORECAST WEATHER
    let forecast = data.forecast;
    for (let i = 0; i < 3; i++) {
      let day = document.querySelector(`#day${i}`);
      day.children[0].textContent = forecast.forecastday[i].date.slice(-5);
      day.children[1].src = forecast.forecastday[i].day.condition.icon;
      day.children[2].textContent = `${forecast.forecastday[i].day.mintemp_c}°C - ${forecast.forecastday[i].day.maxtemp_c}°C`;
    }
  } catch (err) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=Moscow&days=3`,
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

    let container = document.querySelector("#container");
    container.innerHTML = "";

    let array = data.forecast.forecastday[0].hour;

    for (let i = 0; i < array.length; i++) {
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

    let forecast = data.forecast;
    for (let i = 0; i < 3; i++) {
      let day = document.querySelector(`#day${i}`);
      day.children[0].textContent = forecast.forecastday[i].date;
      day.children[1].src = forecast.forecastday[i].day.condition.icon;
      day.children[2].textContent = `${forecast.forecastday[i].day.mintemp_c} - ${forecast.forecastday[i].day.maxtemp_c}`;
    }
  }
}

export { getData };
