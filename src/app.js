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

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

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
//DISPLAY the correct icon weather
//step 23: add an id to img on html + create icon element, select it and setAttribute
//step 24: remove the link of src img on html
//step 25: To change the alternative text. Create a setAttribute using hte same technique.
//Create my search engine
//step 26: add form element on html + add an id + create the inputs of the form
//step 27: creat a div.row in order to align them with 2 columns + add a class to my button in order to have it better.
//step 28: in order to add some margin at the bottom, add a class to my form on html file
//LET'S LINK THE FORM
//step 29: create the from variable and select it + add an eventListener
//step 30: create the function and add an id to my input
//step 31: create cityInput Element and selecti it + try with console.log if it works well
//step 32: Change the name of the existing function to hanldeSubmit + create a new function with the name search and put the variables apiKey, city and apiUrl + axios inside this one. I can delete the variable city because I already have it on my function.
//step 33: call the function search
//step 34: in order to display the city imput as H1 on my form, I call the search function inside the handleSubmit function --> search(cityInputElement.value);
