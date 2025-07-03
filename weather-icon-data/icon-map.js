
export default function GetWeatherIcon(str) {

  const iconMap = {
    "clear-day": "/top-weather-app/weather-icon-data/clear-day.png",
    "clear-night": "/top-weather-app/weather-icon-data/clear-night.png",
    "partly-cloudy-day": "/top-weather-app/weather-icon-data/partly-cloudy-day.png",
    "partly-cloudy-night": "/top-weather-app/weather-icon-data/partly-cloudy-night.png",
    "cloudy": "/top-weather-app/weather-icon-data/cloudy.png",
    "fog": "/top-weather-app/weather-icon-data/fog.png",
    "wind": "/top-weather-app/weather-icon-data/wind.png",
    "rain": "/top-weather-app/weather-icon-data/rain.png",
    "showers-day": "/top-weather-app/weather-icon-data/showers-day.png",
    "showers-night": "/top-weather-app/weather-icon-data/showers-night.png",
    "snow": "/top-weather-app/weather-icon-data/snow.png",
    "snow-showers-day": "/top-weather-app/weather-icon-data/snow-showers-day.png",
    "snow-showers-night": "/top-weather-app/weather-icon-data/snow-showers-night.png",
    "thunder": "/top-weather-app/weather-icon-data/thunder.png",
    "thunder-showers-day": "/top-weather-app/weather-icon-data/thunder-showers-day.png",
    "thunder-showers-night": "/top-weather-app/weather-icon-data/thunder-showers-night.png",
    "hail": "/top-weather-app/weather-icon-data/hail.png"
  };

  if (iconMap[str]) {
    return iconMap[str];
  } else {
    return null;
  }

}

