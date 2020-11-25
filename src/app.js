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
}

let apiKey = "04bc9729bca28c954ae69403fa79befa";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

//step 1: create the variables apiKey and apiUrl
//step 2: call axios
//step 3: create the function displayTemperature(response)
//DISPLAY THE TEMPERATURE
//step 4: search where is temperature inside my console.log --> main.temp
//step 5: from html remove the number degree and add an id name
//step 6: do the same for the city name
//step 7: do the same for the weather condition
//step 8: create the variable temperatureElement and select it
//step 9: do the same to DISPLAY THE CITY
//console.log(response.data) and search where is the city --> data.name
//DISPLAY THE CONDITION
//step 10: create and select the description
//DISPLAY THE HUMIDITY
//step 11: delete de 89% and create a span after Humidity and an an id to the span
// step 12: create the new element for humidity
//step 13: do the same for Wind
// DISPLAY THE CURRENT DATE
//step 14: add an id and delete Wednesday 09:00
//step 15 : create the element and select it
//step 16: create the function in order to display the date as Wednesday 09:00
//step 17: create the variable date, hours, minutes, day
//step 18: create an ary for all days of the week start on Sunday
//step 19: change --> let day = date.getDay(); to --> let day = days[date.getDay()];
//step 20: put the if condition for minutes and hours in order to display well the current hour
//step 21: remove the console.log
//step 22: create the variable city and put it on the apiUrl
