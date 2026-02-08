const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weather");
const errorBox = document.getElementById("error");

const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const windEl = document.getElementById("wind");
const feelsEl = document.getElementById("feels");


searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchCoordinates(city);
    } else {
        showError("Please enter a city name");
    }
});


function fetchCoordinates(city) {
    clearUI();

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        .then(res => res.json())
        .then(data => {
            if (!data.results) {
                showError("City not found");
                return;
            }

            const { latitude, longitude, name } = data.results[0];
            fetchWeather(latitude, longitude, name);
        })
        .catch(() => showError("Something went wrong"));
}


function fetchWeather(lat, lon, city) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(res => res.json())
        .then(data => updateUI(data.current_weather, city))
        .catch(() => showError("Unable to fetch weather"));
}


function updateUI(weather, city) {
    cityNameEl.textContent = city;
    tempEl.textContent = `${weather.temperature}°C`;
    windEl.textContent = `${weather.windspeed} km/h`;
    feelsEl.textContent = `${weather.temperature}°C`;

    weatherBox.classList.remove("hidden");
}


function showError(message) {
    errorBox.textContent = message;
    weatherBox.classList.add("hidden");
}

function clearUI() {
    errorBox.textContent = "";
    weatherBox.classList.add("hidden");
}
