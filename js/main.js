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
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/random/1600x900/?" + name + "')";
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
    document.querySelector(".search-bar").value = "";
  }
});

// Show Result on the web page
weather.fetchWeather("cairo");
