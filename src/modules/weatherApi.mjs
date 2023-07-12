const weather_free_key = '642bc0610f0b4660af3133343231007';
const weather_api_url = `https://api.weatherapi.com/v1/forecast.json?key=${weather_free_key}&days=5&q=query_value`;

const regex = {
  spaceBeforeComma: /,\s/g,
  spaceAfterComma: /\s,/g,
  spaceBetweenWords: /\s/g,
};

function getFormatUrl(query) {
  return weather_api_url.replace('query_value', formatQuery(query));
}

function formatQuery(query) {
  return query
    .trim()
    .replaceAll(regex.spaceAfterComma, ',')
    .replaceAll(regex.spaceBeforeComma, ',')
    .replaceAll(regex.spaceBetweenWords, '%20');
}

async function fetchWeatherData(url) {
  const response = await fetch(url, { mode: 'cors' });
  return await getJsonData(response);
}

function getJsonData(data) {
  return data.json();
}

export { getFormatUrl, fetchWeatherData };
