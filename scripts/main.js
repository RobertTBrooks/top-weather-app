import GetWeatherData from './GetWeather.js';
import GetWeatherIcon from '../weather-icon-data/icon-map.js';

addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("weather-box");
  const form = document.getElementById("form-data");
  let weatherData = null;
  let isFront = true;
  let currentDay = 0;
  let maxDay = 0;

  card.addEventListener('click', () => {
    if (isFront) {
      card.classList.add('flip');
      isFront = false;
    } else {
      card.classList.remove('flip');
      isFront = true;
    }

    if (maxDay > currentDay) currentDay++;
    if (maxDay <= currentDay) currentDay = 0;

    SetWeatherDisplay(currentDay, weatherData);

  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const city = formData.get('city');
    const state = formData.get('state');
    const days = formData.get('days');
    form.reset();

    console.log(city, state, days);
    weatherData = await renderWeather(city, state, days);
    maxDay = weatherData.length;
    console.log(weatherData);
    SetWeatherDisplay(currentDay, weatherData);

  })



});
async function renderWeather(city, state, days) {


  const weatherData = await GetWeatherData(city, state, days);

  return weatherData;
}

function SetWeatherDisplay(day, weatherData) {
  const date = document.getElementById("date");
  const icon = document.getElementById("weather-icon");
  const realFeel = document.getElementById("real-feel");
  const temp = document.getElementById("temp");
  const condition = document.getElementById("condition");
  const description = document.getElementById("description");
  const weatherIcon = weatherData[day].icon;

  console.log(weatherIcon);
  date.innerHTML = weatherData[day].date;
  icon.innerHTML = `<img src="${GetWeatherIcon(weatherIcon)}">`;
  temp.innerHTML = `<span>High: ${weatherData[day].high}</span> <span>Low: ${weatherData[day].low}</span>`;
  realFeel.innerHTML = `Real Feel: ${weatherData[day].feelsLike}`;
  condition.innerHTML = weatherData[day].condition;
  description.innerHTML = weatherData[day].description;
}
