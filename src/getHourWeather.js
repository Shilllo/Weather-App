async function getHourWeather(place) {
  try {
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
  } catch (err) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e9c674b0342042a48b0160004240505&q=Moscow&days=1`,
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
}

export { getHourWeather };
