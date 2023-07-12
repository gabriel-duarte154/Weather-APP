import * as WeatherAPi from './modules/weatherApi.mjs';
import weatherIcons from './weather/weather.json';

const button = document.querySelector('button');
button.addEventListener('click', search);

async function search() {
  const query = getInputValue();
  if (!query) return;
  const url = WeatherAPi.getFormatUrl(query);
  const data = await WeatherAPi.fetchWeatherData(url);
  console.log(data);

  const iconUrl = getIconUrl(data);
  const img = document.createElement('img');
  img.src = iconUrl;
  document.body.appendChild(img);
}

function getInputValue() {
  const input = document.querySelector('input');
  return input.value;
}

function getIconUrl(data) {
  const obj = weatherIcons.find(
    (item) => item.code === data.current.condition.code
  );
  const url = `icons/<time>/${obj.icon}.png`;
  return url.replace('<time>', getTime(data));
}

function getTime(data) {
  return data.current.is_day === 1 ? 'day' : 'night';
}
