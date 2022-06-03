function getCurrentWeather(response) {
  document.querySelector("#current-city-details-weather").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#current-city-details-temperature").innerHTML =
    Math.round(response.data.main.temp);
  document.querySelector("#current-city-details-humidity").innerHTML =
    Math.round(response.data.main.humidity);
  document.querySelector("#current-city-details-wind-speed").innerHTML =
    Math.round(response.data.wind.speed);
  document.querySelector("h1").innerHTML = `${response.data.name}`;
}

function searchCity(cityValue) {
  let apiKey = `bb88e93a86fed0c8e2a47a6a16388a81`;
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  axios.get(apiLink).then(getCurrentWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#search-city-form-value").value;
  searchCity(cityValue);
}

/*function chooseCelsius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector(
    "#current-city-details-temperature"
  );
  currentTemperature.innerHTML = `19`;
}

function chooseFahrenheit(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector(
    "#current-city-details-temperature"
  );
  currentTemperature.innerHTML = `60`;
}*/

//first challange
function convertDate(time) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function retrievePosition(position) {
  let apiKey = `bb88e93a86fed0c8e2a47a6a16388a81`;
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiLink).then(getCurrentWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentTime = document.querySelector("#current-city-details-time");
let time = new Date();
currentTime.innerHTML = convertDate(time);

//second challenge
let searchSityForm = document.querySelector("#search-city-form");
searchSityForm.addEventListener("submit", handleSubmit);

/*thierd challange
let celsius = document.querySelector("#current-city-details-celsius-link");
celsius.addEventListener("click", chooseCelsius);
let fahrenheit = document.querySelector(
  "#current-city-details-fahrenheit-link"
);
fahrenheit.addEventListener("click", chooseFahrenheit);*/

//location

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("London");
