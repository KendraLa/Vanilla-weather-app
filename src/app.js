function displayTemperature(response) {
  console.log(response.data);

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
}

let apiKey = "04bc9729bca28c954ae69403fa79befa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

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
