function formatDate() {
  let h3 = document.querySelector("h3");
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  h3.innerHTML = `Today is ${day} ${hours}:${minutes}`;
}

formatDate();

function showCity(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#city-text-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `City is ${enterCity.value}`;
}

let inputCity = document.querySelector("#input-city");

inputCity.addEventListener("submit", showCity);

function findPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(findPosition);

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=0821ab50d69ba23a98b1bd9d0cf0c1e4&units=metric`;

function showTemperature(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.main.temp}`;
}

axios.get(`${apiUrl}`).then(showTemperature);
