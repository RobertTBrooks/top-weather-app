// GetWeather.js  (ES module)
export default async function getWeatherData(city, state, daysRequested = 3) {

  const apiKey = 'ZZAMZR39MN83MGM4VMQ94QTMV';

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    `${city} ${state}`
  )}?unitGroup=us&include=days%2Ccurrent&key=${apiKey}&contentType=json`;


  const results = [];
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const maxDays = Math.min(daysRequested, data.days.length);

    for (let i = 0; i < maxDays; i++) {
      const d = data.days[i];
      results.push({
        date: formatDate(d.datetime), // "07/02/2025"
        high: d.tempmax,              // 89
        low: d.tempmin,               // 72.9
        feelsLike: d.feelslike,       // 82.2
        condition: d.conditions,      // "Rain, Partially cloudy"
        description: d.description,   // Longer text
        icon: d.icon                  // "rain"
      });
    }
  } catch (err) {
    console.error('Weather fetch failed:', err);
  }

  return results;                     // <-- return the array!
}
//Format date 07/02/2025
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${month}/${day}/${year}`
}
