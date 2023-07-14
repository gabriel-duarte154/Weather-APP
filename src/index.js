import * as WeatherAPi from './modules/weatherApi.mjs';
import weatherIcons from './weather/weather.json';
let current_unit = 'c';
let current_data;

async function search(query) {
  if (!query) return;

  sartLoadAnimation();

  const url = WeatherAPi.getFormatUrl(query);
  const data = await WeatherAPi.fetchWeatherData(url);
  setData(data);
  generatePage();
  setTheme();
  addCovertEvent();
  showPage();
  finishedLoadAnimation();
}

function sartLoadAnimation() {
  const animation = document.querySelector('.animation');
  animation.classList.remove('hidden');
}

function finishedLoadAnimation() {
  const animation = document.querySelector('.animation');
  animation.classList.add('hidden');
}

function setData(data) {
  current_data = data;
}

function getInputValue() {
  const input = document.querySelector('input');
  return input.value;
}

function generatePage() {
  fillCurrentSection();
  fillMoreInformationSection();
  fillForecastSection();
}

function fillCurrentSection() {
  const currentSection = document.querySelector('.current');
  currentSection.innerHTML = '';

  const weather_info_city = getCityElement();
  const weather_info_country = getCountryElement();
  const weather_info_temperature = getTemperatureElement();
  const weather_info_status = getStatusElement();
  const time = getTimeElement();

  currentSection.appendChild(weather_info_city);
  currentSection.appendChild(weather_info_country);
  currentSection.appendChild(weather_info_temperature);
  currentSection.appendChild(weather_info_status);
  currentSection.appendChild(time);
}

function getCityElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_city');
  element.textContent = current_data.location.name;
  return element;
}

function getCountryElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_country');
  element.textContent = current_data.location.country;
  return element;
}

function getTemperatureElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_temperature');

  const temp = document.createElement('span');
  temp.classList.add('current_unit');
  temp.id = 'temp';
  temp.textContent = roundNumber(current_data.current.temp_c);

  const span = document.createElement('span');
  const sup = document.createElement('sup');
  span.classList.add('symbol_container');
  sup.id = 'unit_symbol';

  span.textContent = 'º';
  sup.textContent = current_unit.toUpperCase();

  span.appendChild(sup);
  element.appendChild(temp);
  element.appendChild(span);

  return element;
}

function getStatusElement() {
  const element = document.createElement('div');
  element.classList.add('weather_info_status');

  const condition = document.createElement('span');
  condition.classList.add('condition');
  condition.textContent = current_data.current.condition.text;

  const div = document.createElement('div');

  const max = document.createElement('span');
  max.classList.add('max');
  max.id = 'maxtemp';
  max.textContent = `${roundNumber(
    current_data.forecast.forecastday[0].maxtemp_c
  )}º`;

  const slash = document.createElement('span');
  slash.textContent = '/';

  const min = document.createElement('span');
  min.classList.add('min');
  min.id = 'mintemp';
  min.textContent = `${roundNumber(
    current_data.forecast.forecastday[0].mintemp_c
  )}º`;

  div.appendChild(max);
  div.appendChild(slash);
  div.appendChild(min);
  element.appendChild(condition);
  element.appendChild(div);

  return element;
}

function getTimeElement() {
  const element = document.createElement('span');
  element.id = 'time';
  element.textContent = getHours();

  return element;
}

function getHours() {
  const time = current_data.location.localtime.split(' ');
  const hours_minutes = time[1].split(':');
  return formatTime(hours_minutes[0]) + ':' + hours_minutes[1];
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function roundNumber(value) {
  return Math.floor(value);
}

function fillMoreInformationSection() {
  const containers = document.querySelectorAll('.more_information span');

  containers.forEach((container) => {
    if (container.id === 'feelslike') {
      container.textContent = roundNumber(
        current_data.current[`${container.id}_${current_unit}`]
      );
      return;
    }
    container.textContent = current_data.current[container.id];
  });
}

function fillForecastSection() {
  const forecastSection = document.querySelector('.forecast');
  forecastSection.innerHTML = '';

  current_data.forecast.forecastday.forEach((forecast) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const icon = document.createElement('i');
    const img = document.createElement('img');
    img.src = getIconUrl(forecast.condition.code);
    icon.appendChild(img);

    const dayElement = document.createElement('span');
    dayElement.classList.add('day');
    dayElement.textContent = getDay(forecast.date);

    const temp_container = document.createElement('div');
    temp_container.classList.add('max_min');

    const max = document.createElement('div');
    max.classList.add('max');
    max.textContent = roundNumber(forecast[`maxtemp_${current_unit}`]) + 'º';

    const slash = document.createElement('span');
    slash.textContent = '/';

    const min = document.createElement('span');
    min.classList.add('min');
    min.textContent = roundNumber(forecast[`mintemp_${current_unit}`]) + 'º';

    temp_container.appendChild(max);
    temp_container.appendChild(slash);
    temp_container.appendChild(min);

    card.appendChild(icon);
    card.appendChild(dayElement);
    card.appendChild(temp_container);

    forecastSection.appendChild(card);
  });
}

function addCovertEvent() {
  const button = document.querySelector('.toggle-unit');
  button.addEventListener('click', convertUnits);
}

function convertUnits() {
  toggleCurrentUnit();
  toggleButton();
  convertCurrentUnits();
  convertForecastUnits();
}

function toggleButton() {
  const button = document.querySelector('.toggle-unit');
  button.textContent = `º${current_unit.toUpperCase()}`;
}

function toggleCurrentUnit() {
  if (current_unit === 'c') {
    current_unit = 'f';
    return;
  }
  current_unit = 'c';
}

function convertCurrentUnits() {
  const elements = document.querySelectorAll('.current_unit');
  const symbol = document.querySelector('#unit_symbol');
  symbol.textContent = current_unit.toUpperCase();
  elements.forEach((element) => {
    element.textContent = roundNumber(
      current_data.current[`${element.id}_${current_unit}`]
    );
  });
}

function convertForecastUnits() {
  const max_temp = document.querySelector('.max');
  const min_temp = document.querySelector('.min');

  max_temp.textContent =
    roundNumber(
      current_data.forecast.forecastday[0][`${max_temp.id}_${current_unit}`]
    ) + 'º';

  min_temp.textContent =
    roundNumber(
      current_data.forecast.forecastday[0][`${min_temp.id}_${current_unit}`]
    ) + 'º';

  fillForecastSection();
}

function showPage() {
  const main = document.querySelector('.main');
  main.classList.remove('hidden');
}

function getIconUrl(code) {
  const iconObj = weatherIcons.find((icon) => icon.code === code);
  const url = `icons/day/${iconObj.icon}.png`;
  return url;
}

function getDay(date) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const today = new Date();
  const forecastDate = new Date(...formatDate(date));

  if (forecastDate.getDay() === today.getDay()) {
    return 'Today';
  }
  return weekday[forecastDate.getDay()];
}

function formatDate(date) {
  const splitData = date.split('-');
  splitData[1] = splitData[1] - 1;
  return splitData;
}

function setTheme() {
  const body = document.body;
  const hours = Number(getHours().split(':').shift());
  if (hours >= 6 && hours < 8) {
    body.style.backgroundImage = 'var(--sunrise-gradient)';
  }
  if (hours >= 8 && hours < 17) {
    body.style.backgroundImage = 'var(--day-gradient)';
  }
  if (hours >= 17 && hours < 19) {
    body.style.backgroundImage = 'var(--sunset-gradient)';
  }
  if (hours >= 19 || hours < 6) {
    body.style.backgroundImage = 'var(--night-gradient)';
  }
}

window.addEventListener('keydown', captureEnter);

function captureEnter(e) {
  if (e.key === 'Enter') {
    search(getInputValue());
  }
}

search('london');
