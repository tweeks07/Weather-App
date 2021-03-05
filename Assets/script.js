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
var currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + api + '&units=imperial';



function getCurrentUVI(lat, lon) {
    var currentUVI = 'http://api.openweathermap.org/data/2.5/uvi?lat=' + lat + "&lon=" + lon + "&appid=" + api
    fetch(currentUVI)
        .then(function (results) {
            return results.json();
        })
        .then(function (UVI) {
            console.log(UVI);
            var currentUVI = document.querySelector('#uvIndex');
            console.log(UVI);
            currentUVI.textContent = UVI.value;
        })
}
function getCurrentWeather() {
    fetch(currentWeatherURL)
        .then(function (results) {
            return results.json();
        })
        .then(function (weather) {
            console.log(weather);
            var currentCity = document.querySelector('#currentCity');
            console.log(currentCity);
            currentCity.textContent = weather.name;
            var temp = document.querySelector('#temp');
            //var tempF = 9/5 * (weather.main.temp - 273) + 32;
            temp.textContent = "Temperature: " + weather.main.temp;
            var humidity = document.querySelector('#humidity');
            humidity.textContent = "Humidity: " + weather.main.humidity + "%";
            var windSpeed = document.querySelector('#windSpeed');
            windSpeed.textContent = "Wind Speed: " + weather.wind.speed + "MPH";
            var lat = weather.coord.lat;
            var lon = weather.coord.lon;
            getCurrentUVI(lat, lon);
            get5Day(lat, lon);



        });
};
getCurrentWeather();

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function get5Day(lat, lon) {
    var forecast = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + "&lon=" + lon + "&appid=" + api + '&units=imperial';
    fetch(forecast)
        .then(function (results) {
            return results.json();
        })
        .then(function (data) {
            console.log(data);
            var forecastElement = document.querySelector('#forecastElement');
            for (var i = 0; i < 5; i++) {
                var div = document.createElement("div");
                div.innerHTML = "Temperature: " + data.daily[i].temp.day;
                forecastElement.appendChild(div);
                div.classList.add("card");
                var humidityElement = document.createElement("h6");
                humidityElement.innerHTML = "Humidity: " + data.daily[i].humidity + "%";
                div.appendChild(humidityElement)
                var dateElement = document.createElement("h7");
                dateElement.innerHTML = data.daily[i].dt;
                div.appendChild(dateElement)
                var iconElement = document.createElement("h8");
                iconElement.innerHTML = data.daily[i].weather[0].icon;
                div.appendChild(iconElement)
            }
        })
}




