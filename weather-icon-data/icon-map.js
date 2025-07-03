
export default function GetWeatherIcon(str) {

  const iconMap = {
    "clear-day": "/weather-icon-data/clear-day.png",
    "clear-night": "/weather-icon-data/clear-night.png",
    "partly-cloudy-day": "/weather-icon-data/partly-cloudy-day.png",
    "partly-cloudy-night": "/weather-icon-data/partly-cloudy-night.png",
    "cloudy": "/weather-icon-data/cloudy.png",
    "fog": "/weather-icon-data/fog.png",
    "wind": "/weather-icon-data/wind.png",
    "rain": "/weather-icon-data/rain.png",
    "showers-day": "/weather-icon-data/showers-day.png",
    "showers-night": "/weather-icon-data/showers-night.png",
    "snow": "/weather-icon-data/snow.png",
    "snow-showers-day": "/weather-icon-data/snow-showers-day.png",
    "snow-showers-night": "/weather-icon-data/snow-showers-night.png",
    "thunder": "/weather-icon-data/thunder.png",
    "thunder-showers-day": "/weather-icon-data/thunder-showers-day.png",
    "thunder-showers-night": "/weather-icon-data/thunder-showers-night.png",
    "hail": "/weather-icon-data/hail.png"
  };

  if (iconMap[str]) {
    return iconMap[str];
  } else {
    return null;
  }

}

