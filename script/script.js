const API_KEY = "f8bfcd960b869ab302ef50fab58de228";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector('.search input');
let searchButton = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');
let errorText = document.querySelector('.error');

const checkWeather = async (city) => {
    let response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    let data = await response.json();

    if (data.cod == "404") {
        errorText.innerText = "Invalid City Name";
        errorText.style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } else {
        errorText.style.display = "none";

        document.querySelector('.city-name').innerText = data.name;
        document.querySelector('.temp').innerText = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerText = data.main.humidity + '%';
        document.querySelector('.wind').innerText = data.wind.speed + 'km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Assets/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Assets/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Assets/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Assets/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Assets/images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Assets/images/snow.png";
        }

        document.querySelector('.weather').style.display = "block";
    }
};

searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
