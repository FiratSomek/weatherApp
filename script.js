const key = "36150daea36692d65248e6c1d9a32902";
let weatherInfo = document.getElementById("weather-info");
let searchBtn = document.getElementById("search-btn");
let city = document.getElementById("city");

let getWeather = () => {
  let cityValue = city.value;
  if (cityValue.length == 0) {
    weatherInfo.innerHTML = `<h3>Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        weatherInfo.innerHTML = `<h2>${data.name}</h2>`;
        weatherInfo.innerHTML += `<h4>${data.weather[0].description}</h4>`;
        weatherInfo.innerHTML += `<img src ="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
        weatherInfo.innerHTML += `<h1>${data.main.temp} &#176</h1>`;
        weatherInfo.innerHTML += `<h4>Min temp : ${data.main.temp_min} </h4>`;
        weatherInfo.innerHTML += `<h4>Max temp : ${data.main.temp_max} </h4>`;
        weatherInfo.innerHTML += `<h4>Wind speed : ${data.wind.speed} km/h</h4>`;
      })
      .catch(() => {
        weatherInfo.innerHTML = `<h3>Not Found The City</h3>`;
      });
  }
};
window.addEventListener("load", getWeather);
searchBtn.addEventListener("click", getWeather);
city.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});
