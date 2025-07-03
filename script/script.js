const API_KEY = "f8bfcd960b869ab302ef50fab58de228";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector('.search input');
let searchButton = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon')

const checkWeather = async (city) => {
    try {
        let res = await fetch(API_URL + city +`&appid=${API_KEY}`);
        let data = await res.json();
        console.log(data);

        document.querySelector('.city-name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Assets/images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "Assets/images/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "Assets/images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Assets/images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "Assets/images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "Assets/images/snow.png";
        }

        document.querySelector('.weather').style.display = 'block';
    } catch (error) {
        console.log(error.message);
        
    }
};

searchButton.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})

checkWeather();