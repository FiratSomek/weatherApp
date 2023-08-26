<<<<<<< Updated upstream
=======
const key = "36150daea36692d65248e6c1d9a32902";
const weatherInfo = document.getElementById("weather-info");
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city");

const getWeather = () => {
  let cityValue = cityInput.value;
  if (cityValue.length === 0) {
    alert("Please, enter the name of any city!");
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        weatherInfo.textContent = "";

        const cityName = document.createElement("h2");
        cityName.textContent = data.name;
        weatherInfo.appendChild(cityName);

        const cityDescription = document.createElement("h4");
        cityDescription.textContent = data.weather[0].description;
        weatherInfo.appendChild(cityDescription);

        const weatherIcon = document.createElement("img");
        weatherIcon.src = `  https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherInfo.appendChild(weatherIcon);

        const weatherTemp = document.createElement("h1");
        weatherTemp.textContent = data.main.temp + "\u00B0C";
        weatherInfo.appendChild(weatherTemp);

        const weatherTempMin = document.createElement("h4");
        weatherTempMin.textContent =
          "Min temp: " + data.main.temp_min + "  \u00B0C";
        weatherInfo.appendChild(weatherTempMin);

        const weatherTempMax = document.createElement("h4");
        weatherTempMax.textContent =
          "Max temp: " + data.main.temp_max + " \u00B0C";
        weatherInfo.appendChild(weatherTempMax);

        const weatherWindSpeed = document.createElement("h4");
        weatherWindSpeed.textContent =
          "Wind Speed: " + data.wind.speed + " km/h";
        weatherInfo.appendChild(weatherWindSpeed);
      })
      .catch(() => {
        weatherInfo.innerText = `<h3>Not Found The City</h3>`;
      });
  }
};
window.addEventListener("load", getWeather);
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});
>>>>>>> Stashed changes
