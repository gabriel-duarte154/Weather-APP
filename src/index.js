import * as WeatherAPi from './modules/weatherApi.mjs';

const button = document.querySelector('button');
button.addEventListener('click', search);

async function search() {
  const query = getInputValue();
  if (!query) return;
  const url = WeatherAPi.getFormatUrl(query);
  const data = await WeatherAPi.getWeatherData(url);
  console.log(data);
}

function getInputValue() {
  const input = document.querySelector('input');
  return input.value;
}
