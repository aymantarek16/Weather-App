let weather = {
  apiKey: "c18ff0c308cc68880247aff82c2963f7",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".temp").innerText = `${Math.round(temp)}°C`;
    document.querySelector(".humidity").innerText = `Humidity : ${humidity}%`;
    document.querySelector(".wind").innerText = `wind speed : ${speed} km/h`;
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?"+ name +"')"
  },

  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Search by click on searchBox
document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

// Search by click on enter key on keyboard
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
    document.querySelector(".search-bar").value = ""
  }
});


// Show Result on the web page
weather.fetchWeather("cairo");





// cairo Data

// Api Url :
// https://api.openweathermap.org/data/2.5/weather?q=Cairo&units=metric&appid=c18ff0c308cc68880247aff82c2963f7

// data :
// {
//     "coord": {
//     "lon": 31.2497,
//     "lat": 30.0626
//     },
//     "weather": [
//     {
//     "id": 800,
//     "main": "Clear",
//     "description": "clear sky",
//     "icon": "01n"
//     }
//     ],
//     "base": "stations",
//     "main": {
//     "temp": 290.4,
//     "feels_like": 290.48,
//     "temp_min": 290.05,
//     "temp_max": 290.57,
//     "pressure": 997,
//     "humidity": 88
//     },
//     "visibility": 10000,
//     "wind": {
//     "speed": 3.09,
//     "deg": 20
//     },
//     "clouds": {
//     "all": 0
//     },
//     "dt": 1649643375,
//     "sys": {
//     "type": 2,
//     "id": 2046660,
//     "country": "EG",
//     "sunrise": 1649647962,
//     "sunset": 1649693944
//     },
//     "timezone": 7200,
//     "id": 360630,
//     "name": "Cairo",
//     "cod": 200
//     }
