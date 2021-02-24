//create fetch to search user input city current weather info AND 5 day forecast
//store user input in local storage
//previous user input should be displayed on page logged 
//last input should be retrieved 

/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city*/

//api key - 873eef21345d1afb39e2c882a1521487
var userInput = "charlotte"
var api = "873eef21345d1afb39e2c882a1521487"
var currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + api;


function getCurrentWeather(){
fetch(currentWeatherURL) 
    .then(function(results){
        return results.json();
    })
    .then(function (weather) {
    console.log(weather);
    var currentCity = document.querySelector('#currentCity');
    console.log(currentCity);
    currentCity.textContent = weather.name;
    var temp = document.querySelector ('#temp');
    var tempF = 9/5 * (weather.main.temp - 273) + 32;
    temp.textContent = "Temperature: " + tempF;
    var humidity = document.querySelector ('#humidity');
    humidity.textContent = weather.main.humidity + "%";
    var windSpeed = document.querySelector ('#windSpeed');
    windSpeed.textContent = weather.wind.speed + "MPH";
    var
    });

};
getCurrentWeather();

//Kelvin to Fahrenheit: F = 9/5(K - 273) + 32 or F = 1.8(K - 273) + 32.