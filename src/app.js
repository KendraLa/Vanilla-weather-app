function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  //calculate the date
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let iconELement = document.querySelector("#icon");
  iconELement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  iconELement.setAttribute("alt", response.data.weather[0].description);

  celsiusTemperature = response.data.main.temp;
}

function search(city) {
  let apiKey = "04bc9729bca28c954ae69403fa79befa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();

  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");

//LET'S LINK THE FORM
//step 29: create the from variable and select it + add an eventListener
//step 30: create the function and add an id to my input
//step 31: create cityInput Element and selecti it + try with console.log if it works well
//step 32: Change the name of the existing function to hanldeSubmit + create a new function with the name search and put the variables apiKey, city and apiUrl + axios inside this one. I can delete the variable city because I already have it on my function.
//step 33: call the function search
//step 34: in order to display the city imput as H1 on my form, I call the search function inside the handleSubmit function --> search(cityInputElement.value);
//CONVERT UNITS
//Step 35: add an id to fahrenheit and celsius
//step 36: create the variable and select it
//step 37: create the function
//step 38: create the variable fahrenheitTemperature with matematic formula inside this function
//step 39: create the temperature element and select it
//step 40: create a global variable, let celsiusTemperature = null;
//step 41: create the variable celsiusTemperature = response.data.main.temp; inside the function displayTemperature(response) {}
//step 42: create a link for °C, add an id and do the same as hfahrenheit
//step 43: create a class inside my celsuis-link
//step 44: add celsiusLink.classList.remove("active"); to function displayFahrenheitTemperature(event) {}
//step 45: dot the same for °F but alreves
