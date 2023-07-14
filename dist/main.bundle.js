/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weatherApi.mjs":
/*!************************************!*\
  !*** ./src/modules/weatherApi.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   getFormatUrl: () => (/* binding */ getFormatUrl)
/* harmony export */ });
const weather_free_key = '642bc0610f0b4660af3133343231007';
const weather_api_url = `https://api.weatherapi.com/v1/forecast.json?key=${weather_free_key}&days=5&q=query_value`;

const wind_direction = {
  N: 'North',
  E: 'East',
  S: 'South',
  W: 'West',
  NE: 'NorthEast',
  NW: 'NorthWest',
  SE: 'SouthEast',
  SW: 'SouthWest',
  NNW: 'North-West',
  NNE: 'Noth-East',
  WNW: 'West-NorthWest',
  WSW: 'West-SouthWest',
  SSW: 'South-SouthEast',
  ENE: 'East-NorthEast',
  ESE: 'East-SouthEast',
  SSE: 'South-SouthEast',
};

function getWindDirection(wd) {
  return wind_direction[wd];
}

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
  const data = await getJsonData(response);
  return getNecessaryData(data);
}

function getNecessaryData(data) {
  return {
    location: {
      country: data.location.country,
      name: data.location.name,
      localtime: data.location.localtime,
    },
    current: {
      condition: {
        text: data.current.condition.text,
        code: data.current.condition.code,
      },
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      humidity: data.current.humidity,
      uv: data.current.uv,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      pressure_mb: data.current.pressure_mb,
      wind_dir: getWindDirection(data.current.wind_dir),
      wind_kph: data.current.wind_kph,
      is_day: data.current.is_day,
      sunset: data.forecast.forecastday[0].astro.sunset,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      moon_phase: data.forecast.forecastday[0].astro.moon_phase,
      daily_chance_of_rain:
        data.forecast.forecastday[0].day.daily_chance_of_rain,
    },
    forecast: {
      forecastday: [
        {
          condition: {
            code: data.forecast.forecastday[0].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[0].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[0].day.mintemp_f,
          date: data.forecast.forecastday[0].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[1].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
          date: data.forecast.forecastday[1].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[2].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[2].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[2].day.mintemp_f,
          date: data.forecast.forecastday[2].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[3].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[3].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[3].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[3].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[3].day.mintemp_f,
          date: data.forecast.forecastday[3].date,
        },
        {
          condition: {
            code: data.forecast.forecastday[4].day.condition.code,
          },
          maxtemp_c: data.forecast.forecastday[4].day.maxtemp_c,
          maxtemp_f: data.forecast.forecastday[4].day.maxtemp_f,
          mintemp_c: data.forecast.forecastday[4].day.mintemp_c,
          mintemp_f: data.forecast.forecastday[4].day.mintemp_f,
          date: data.forecast.forecastday[4].date,
        },
      ],
    },
  };
}

function getJsonData(data) {
  return data.json();
}




/***/ }),

/***/ "./src/weather/weather.json":
/*!**********************************!*\
  !*** ./src/weather/weather.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"code":1000,"day":"Sunny","night":"Clear","icon":113},{"code":1003,"day":"Partly cloudy","night":"Partly cloudy","icon":116},{"code":1006,"day":"Cloudy","night":"Cloudy","icon":119},{"code":1009,"day":"Overcast","night":"Overcast","icon":122},{"code":1030,"day":"Mist","night":"Mist","icon":143},{"code":1063,"day":"Patchy rain possible","night":"Patchy rain possible","icon":176},{"code":1066,"day":"Patchy snow possible","night":"Patchy snow possible","icon":179},{"code":1069,"day":"Patchy sleet possible","night":"Patchy sleet possible","icon":182},{"code":1072,"day":"Patchy freezing drizzle possible","night":"Patchy freezing drizzle possible","icon":185},{"code":1087,"day":"Thundery outbreaks possible","night":"Thundery outbreaks possible","icon":200},{"code":1114,"day":"Blowing snow","night":"Blowing snow","icon":227},{"code":1117,"day":"Blizzard","night":"Blizzard","icon":230},{"code":1135,"day":"Fog","night":"Fog","icon":248},{"code":1147,"day":"Freezing fog","night":"Freezing fog","icon":260},{"code":1150,"day":"Patchy light drizzle","night":"Patchy light drizzle","icon":263},{"code":1153,"day":"Light drizzle","night":"Light drizzle","icon":266},{"code":1168,"day":"Freezing drizzle","night":"Freezing drizzle","icon":281},{"code":1171,"day":"Heavy freezing drizzle","night":"Heavy freezing drizzle","icon":284},{"code":1180,"day":"Patchy light rain","night":"Patchy light rain","icon":293},{"code":1183,"day":"Light rain","night":"Light rain","icon":296},{"code":1186,"day":"Moderate rain at times","night":"Moderate rain at times","icon":299},{"code":1189,"day":"Moderate rain","night":"Moderate rain","icon":302},{"code":1192,"day":"Heavy rain at times","night":"Heavy rain at times","icon":305},{"code":1195,"day":"Heavy rain","night":"Heavy rain","icon":308},{"code":1198,"day":"Light freezing rain","night":"Light freezing rain","icon":311},{"code":1201,"day":"Moderate or heavy freezing rain","night":"Moderate or heavy freezing rain","icon":314},{"code":1204,"day":"Light sleet","night":"Light sleet","icon":317},{"code":1207,"day":"Moderate or heavy sleet","night":"Moderate or heavy sleet","icon":320},{"code":1210,"day":"Patchy light snow","night":"Patchy light snow","icon":323},{"code":1213,"day":"Light snow","night":"Light snow","icon":326},{"code":1216,"day":"Patchy moderate snow","night":"Patchy moderate snow","icon":329},{"code":1219,"day":"Moderate snow","night":"Moderate snow","icon":332},{"code":1222,"day":"Patchy heavy snow","night":"Patchy heavy snow","icon":335},{"code":1225,"day":"Heavy snow","night":"Heavy snow","icon":338},{"code":1237,"day":"Ice pellets","night":"Ice pellets","icon":350},{"code":1240,"day":"Light rain shower","night":"Light rain shower","icon":353},{"code":1243,"day":"Moderate or heavy rain shower","night":"Moderate or heavy rain shower","icon":356},{"code":1246,"day":"Torrential rain shower","night":"Torrential rain shower","icon":359},{"code":1249,"day":"Light sleet showers","night":"Light sleet showers","icon":362},{"code":1252,"day":"Moderate or heavy sleet showers","night":"Moderate or heavy sleet showers","icon":365},{"code":1255,"day":"Light snow showers","night":"Light snow showers","icon":368},{"code":1258,"day":"Moderate or heavy snow showers","night":"Moderate or heavy snow showers","icon":371},{"code":1261,"day":"Light showers of ice pellets","night":"Light showers of ice pellets","icon":374},{"code":1264,"day":"Moderate or heavy showers of ice pellets","night":"Moderate or heavy showers of ice pellets","icon":377},{"code":1273,"day":"Patchy light rain with thunder","night":"Patchy light rain with thunder","icon":386},{"code":1276,"day":"Moderate or heavy rain with thunder","night":"Moderate or heavy rain with thunder","icon":389},{"code":1279,"day":"Patchy light snow with thunder","night":"Patchy light snow with thunder","icon":392},{"code":1282,"day":"Moderate or heavy snow with thunder","night":"Moderate or heavy snow with thunder","icon":395}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherApi.mjs */ "./src/modules/weatherApi.mjs");
/* harmony import */ var _weather_weather_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather/weather.json */ "./src/weather/weather.json");


let current_unit = 'c';
let current_data;

async function search(query) {
  if (!query) return;

  sartLoadAnimation();

  const url = _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.getFormatUrl(query);
  const data = await _modules_weatherApi_mjs__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData(url);
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
  const iconObj = _weather_weather_json__WEBPACK_IMPORTED_MODULE_1__.find((icon) => icon.code === code);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFZO0FBQzlCLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQXBpLm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYXRoZXJfZnJlZV9rZXkgPSAnNjQyYmMwNjEwZjBiNDY2MGFmMzEzMzM0MzIzMTAwNyc7XHJcbmNvbnN0IHdlYXRoZXJfYXBpX3VybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3dlYXRoZXJfZnJlZV9rZXl9JmRheXM9NSZxPXF1ZXJ5X3ZhbHVlYDtcclxuXHJcbmNvbnN0IHdpbmRfZGlyZWN0aW9uID0ge1xyXG4gIE46ICdOb3J0aCcsXHJcbiAgRTogJ0Vhc3QnLFxyXG4gIFM6ICdTb3V0aCcsXHJcbiAgVzogJ1dlc3QnLFxyXG4gIE5FOiAnTm9ydGhFYXN0JyxcclxuICBOVzogJ05vcnRoV2VzdCcsXHJcbiAgU0U6ICdTb3V0aEVhc3QnLFxyXG4gIFNXOiAnU291dGhXZXN0JyxcclxuICBOTlc6ICdOb3J0aC1XZXN0JyxcclxuICBOTkU6ICdOb3RoLUVhc3QnLFxyXG4gIFdOVzogJ1dlc3QtTm9ydGhXZXN0JyxcclxuICBXU1c6ICdXZXN0LVNvdXRoV2VzdCcsXHJcbiAgU1NXOiAnU291dGgtU291dGhFYXN0JyxcclxuICBFTkU6ICdFYXN0LU5vcnRoRWFzdCcsXHJcbiAgRVNFOiAnRWFzdC1Tb3V0aEVhc3QnLFxyXG4gIFNTRTogJ1NvdXRoLVNvdXRoRWFzdCcsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kRGlyZWN0aW9uKHdkKSB7XHJcbiAgcmV0dXJuIHdpbmRfZGlyZWN0aW9uW3dkXTtcclxufVxyXG5cclxuY29uc3QgcmVnZXggPSB7XHJcbiAgc3BhY2VCZWZvcmVDb21tYTogLyxcXHMvZyxcclxuICBzcGFjZUFmdGVyQ29tbWE6IC9cXHMsL2csXHJcbiAgc3BhY2VCZXR3ZWVuV29yZHM6IC9cXHMvZyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1hdFVybChxdWVyeSkge1xyXG4gIHJldHVybiB3ZWF0aGVyX2FwaV91cmwucmVwbGFjZSgncXVlcnlfdmFsdWUnLCBmb3JtYXRRdWVyeShxdWVyeSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRRdWVyeShxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeVxyXG4gICAgLnRyaW0oKVxyXG4gICAgLnJlcGxhY2VBbGwocmVnZXguc3BhY2VBZnRlckNvbW1hLCAnLCcpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUJlZm9yZUNvbW1hLCAnLCcpXHJcbiAgICAucmVwbGFjZUFsbChyZWdleC5zcGFjZUJldHdlZW5Xb3JkcywgJyUyMCcpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKHVybCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SnNvbkRhdGEocmVzcG9uc2UpO1xyXG4gIHJldHVybiBnZXROZWNlc3NhcnlEYXRhKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZWNlc3NhcnlEYXRhKGRhdGEpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYXRpb246IHtcclxuICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxyXG4gICAgICBuYW1lOiBkYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICAgIGxvY2FsdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICB9LFxyXG4gICAgY3VycmVudDoge1xyXG4gICAgICBjb25kaXRpb246IHtcclxuICAgICAgICB0ZXh0OiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgY29kZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxyXG4gICAgICB9LFxyXG4gICAgICBmZWVsc2xpa2VfYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgICBmZWVsc2xpa2VfZjogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxyXG4gICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgICB1djogZGF0YS5jdXJyZW50LnV2LFxyXG4gICAgICB0ZW1wX2M6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgIHRlbXBfZjogZGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgICAgcHJlc3N1cmVfbWI6IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYixcclxuICAgICAgd2luZF9kaXI6IGdldFdpbmREaXJlY3Rpb24oZGF0YS5jdXJyZW50LndpbmRfZGlyKSxcclxuICAgICAgd2luZF9rcGg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgaXNfZGF5OiBkYXRhLmN1cnJlbnQuaXNfZGF5LFxyXG4gICAgICBzdW5zZXQ6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LFxyXG4gICAgICBzdW5yaXNlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2UsXHJcbiAgICAgIG1vb25fcGhhc2U6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8ubW9vbl9waGFzZSxcclxuICAgICAgZGFpbHlfY2hhbmNlX29mX3JhaW46XHJcbiAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICB9LFxyXG4gICAgZm9yZWNhc3Q6IHtcclxuICAgICAgZm9yZWNhc3RkYXk6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkuY29uZGl0aW9uLmNvZGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5Lm1heHRlbXBfZixcclxuICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkubWludGVtcF9jLFxyXG4gICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5taW50ZW1wX2YsXHJcbiAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvbkRhdGEoZGF0YSkge1xyXG4gIHJldHVybiBkYXRhLmpzb24oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Rm9ybWF0VXJsLCBmZXRjaFdlYXRoZXJEYXRhIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgV2VhdGhlckFQaSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckFwaS5tanMnO1xyXG5pbXBvcnQgd2VhdGhlckljb25zIGZyb20gJy4vd2VhdGhlci93ZWF0aGVyLmpzb24nO1xyXG5sZXQgY3VycmVudF91bml0ID0gJ2MnO1xyXG5sZXQgY3VycmVudF9kYXRhO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5KSB7XHJcbiAgaWYgKCFxdWVyeSkgcmV0dXJuO1xyXG5cclxuICBzYXJ0TG9hZEFuaW1hdGlvbigpO1xyXG5cclxuICBjb25zdCB1cmwgPSBXZWF0aGVyQVBpLmdldEZvcm1hdFVybChxdWVyeSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFdlYXRoZXJBUGkuZmV0Y2hXZWF0aGVyRGF0YSh1cmwpO1xyXG4gIHNldERhdGEoZGF0YSk7XHJcbiAgZ2VuZXJhdGVQYWdlKCk7XHJcbiAgc2V0VGhlbWUoKTtcclxuICBhZGRDb3ZlcnRFdmVudCgpO1xyXG4gIHNob3dQYWdlKCk7XHJcbiAgZmluaXNoZWRMb2FkQW5pbWF0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhcnRMb2FkQW5pbWF0aW9uKCkge1xyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmltYXRpb24nKTtcclxuICBhbmltYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmlzaGVkTG9hZEFuaW1hdGlvbigpIHtcclxuICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5pbWF0aW9uJyk7XHJcbiAgYW5pbWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcclxuICBjdXJyZW50X2RhdGEgPSBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUGFnZSgpIHtcclxuICBmaWxsQ3VycmVudFNlY3Rpb24oKTtcclxuICBmaWxsTW9yZUluZm9ybWF0aW9uU2VjdGlvbigpO1xyXG4gIGZpbGxGb3JlY2FzdFNlY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEN1cnJlbnRTZWN0aW9uKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcclxuICBjdXJyZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgY29uc3Qgd2VhdGhlcl9pbmZvX2NpdHkgPSBnZXRDaXR5RWxlbWVudCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJfaW5mb19jb3VudHJ5ID0gZ2V0Q291bnRyeUVsZW1lbnQoKTtcclxuICBjb25zdCB3ZWF0aGVyX2luZm9fdGVtcGVyYXR1cmUgPSBnZXRUZW1wZXJhdHVyZUVsZW1lbnQoKTtcclxuICBjb25zdCB3ZWF0aGVyX2luZm9fc3RhdHVzID0gZ2V0U3RhdHVzRWxlbWVudCgpO1xyXG4gIGNvbnN0IHRpbWUgPSBnZXRUaW1lRWxlbWVudCgpO1xyXG5cclxuICBjdXJyZW50U2VjdGlvbi5hcHBlbmRDaGlsZCh3ZWF0aGVyX2luZm9fY2l0eSk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlcl9pbmZvX2NvdW50cnkpO1xyXG4gIGN1cnJlbnRTZWN0aW9uLmFwcGVuZENoaWxkKHdlYXRoZXJfaW5mb190ZW1wZXJhdHVyZSk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlcl9pbmZvX3N0YXR1cyk7XHJcbiAgY3VycmVudFNlY3Rpb24uYXBwZW5kQ2hpbGQodGltZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpdHlFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfaW5mb19jaXR5Jyk7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbnRfZGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb3VudHJ5RWxlbWVudCgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyX2luZm9fY291bnRyeScpO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50X2RhdGEubG9jYXRpb24uY291bnRyeTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmVFbGVtZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJfaW5mb190ZW1wZXJhdHVyZScpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudF91bml0Jyk7XHJcbiAgdGVtcC5pZCA9ICd0ZW1wJztcclxuICB0ZW1wLnRleHRDb250ZW50ID0gcm91bmROdW1iZXIoY3VycmVudF9kYXRhLmN1cnJlbnQudGVtcF9jKTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjb25zdCBzdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdXAnKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N5bWJvbF9jb250YWluZXInKTtcclxuICBzdXAuaWQgPSAndW5pdF9zeW1ib2wnO1xyXG5cclxuICBzcGFuLnRleHRDb250ZW50ID0gJ8K6JztcclxuICBzdXAudGV4dENvbnRlbnQgPSBjdXJyZW50X3VuaXQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgc3Bhbi5hcHBlbmRDaGlsZChzdXApO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXR1c0VsZW1lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9pbmZvX3N0YXR1cycpO1xyXG5cclxuICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbicpO1xyXG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRfZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG5cclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgbWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIG1heC5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcclxuICBtYXguaWQgPSAnbWF4dGVtcCc7XHJcbiAgbWF4LnRleHRDb250ZW50ID0gYCR7cm91bmROdW1iZXIoXHJcbiAgICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0ubWF4dGVtcF9jXHJcbiAgKX3CumA7XHJcblxyXG4gIGNvbnN0IHNsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNsYXNoLnRleHRDb250ZW50ID0gJy8nO1xyXG5cclxuICBjb25zdCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbWluLmNsYXNzTGlzdC5hZGQoJ21pbicpO1xyXG4gIG1pbi5pZCA9ICdtaW50ZW1wJztcclxuICBtaW4udGV4dENvbnRlbnQgPSBgJHtyb3VuZE51bWJlcihcclxuICAgIGN1cnJlbnRfZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5taW50ZW1wX2NcclxuICApfcK6YDtcclxuXHJcbiAgZGl2LmFwcGVuZENoaWxkKG1heCk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHNsYXNoKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQobWluKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZUVsZW1lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBlbGVtZW50LmlkID0gJ3RpbWUnO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSBnZXRIb3VycygpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoKSB7XHJcbiAgY29uc3QgdGltZSA9IGN1cnJlbnRfZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKTtcclxuICBjb25zdCBob3Vyc19taW51dGVzID0gdGltZVsxXS5zcGxpdCgnOicpO1xyXG4gIHJldHVybiBmb3JtYXRUaW1lKGhvdXJzX21pbnV0ZXNbMF0pICsgJzonICsgaG91cnNfbWludXRlc1sxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XHJcbiAgcmV0dXJuIHRpbWUgPCAxMCA/IGAwJHt0aW1lfWAgOiB0aW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZE51bWJlcih2YWx1ZSkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbE1vcmVJbmZvcm1hdGlvblNlY3Rpb24oKSB7XHJcbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3JlX2luZm9ybWF0aW9uIHNwYW4nKTtcclxuXHJcbiAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcclxuICAgIGlmIChjb250YWluZXIuaWQgPT09ICdmZWVsc2xpa2UnKSB7XHJcbiAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKFxyXG4gICAgICAgIGN1cnJlbnRfZGF0YS5jdXJyZW50W2Ake2NvbnRhaW5lci5pZH1fJHtjdXJyZW50X3VuaXR9YF1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY3VycmVudF9kYXRhLmN1cnJlbnRbY29udGFpbmVyLmlkXTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEZvcmVjYXN0U2VjdGlvbigpIHtcclxuICBjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcclxuICBmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGN1cnJlbnRfZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKChmb3JlY2FzdCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGdldEljb25VcmwoZm9yZWNhc3QuY29uZGl0aW9uLmNvZGUpO1xyXG4gICAgaWNvbi5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xyXG4gICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGdldERheShmb3JlY2FzdC5kYXRlKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWF4X21pbicpO1xyXG5cclxuICAgIGNvbnN0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heCcpO1xyXG4gICAgbWF4LnRleHRDb250ZW50ID0gcm91bmROdW1iZXIoZm9yZWNhc3RbYG1heHRlbXBfJHtjdXJyZW50X3VuaXR9YF0pICsgJ8K6JztcclxuXHJcbiAgICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNsYXNoLnRleHRDb250ZW50ID0gJy8nO1xyXG5cclxuICAgIGNvbnN0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW4nKTtcclxuICAgIG1pbi50ZXh0Q29udGVudCA9IHJvdW5kTnVtYmVyKGZvcmVjYXN0W2BtaW50ZW1wXyR7Y3VycmVudF91bml0fWBdKSArICfCuic7XHJcblxyXG4gICAgdGVtcF9jb250YWluZXIuYXBwZW5kQ2hpbGQobWF4KTtcclxuICAgIHRlbXBfY29udGFpbmVyLmFwcGVuZENoaWxkKHNsYXNoKTtcclxuICAgIHRlbXBfY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbik7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXBfY29udGFpbmVyKTtcclxuXHJcbiAgICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvdmVydEV2ZW50KCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdW5pdCcpO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnZlcnRVbml0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRVbml0cygpIHtcclxuICB0b2dnbGVDdXJyZW50VW5pdCgpO1xyXG4gIHRvZ2dsZUJ1dHRvbigpO1xyXG4gIGNvbnZlcnRDdXJyZW50VW5pdHMoKTtcclxuICBjb252ZXJ0Rm9yZWNhc3RVbml0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVCdXR0b24oKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS11bml0Jyk7XHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYMK6JHtjdXJyZW50X3VuaXQudG9VcHBlckNhc2UoKX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDdXJyZW50VW5pdCgpIHtcclxuICBpZiAoY3VycmVudF91bml0ID09PSAnYycpIHtcclxuICAgIGN1cnJlbnRfdW5pdCA9ICdmJztcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY3VycmVudF91bml0ID0gJ2MnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0Q3VycmVudFVuaXRzKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbnRfdW5pdCcpO1xyXG4gIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0X3N5bWJvbCcpO1xyXG4gIHN5bWJvbC50ZXh0Q29udGVudCA9IGN1cnJlbnRfdW5pdC50b1VwcGVyQ2FzZSgpO1xyXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSByb3VuZE51bWJlcihcclxuICAgICAgY3VycmVudF9kYXRhLmN1cnJlbnRbYCR7ZWxlbWVudC5pZH1fJHtjdXJyZW50X3VuaXR9YF1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRGb3JlY2FzdFVuaXRzKCkge1xyXG4gIGNvbnN0IG1heF90ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heCcpO1xyXG4gIGNvbnN0IG1pbl90ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbicpO1xyXG5cclxuICBtYXhfdGVtcC50ZXh0Q29udGVudCA9XHJcbiAgICByb3VuZE51bWJlcihcclxuICAgICAgY3VycmVudF9kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdW2Ake21heF90ZW1wLmlkfV8ke2N1cnJlbnRfdW5pdH1gXVxyXG4gICAgKSArICfCuic7XHJcblxyXG4gIG1pbl90ZW1wLnRleHRDb250ZW50ID1cclxuICAgIHJvdW5kTnVtYmVyKFxyXG4gICAgICBjdXJyZW50X2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF1bYCR7bWluX3RlbXAuaWR9XyR7Y3VycmVudF91bml0fWBdXHJcbiAgICApICsgJ8K6JztcclxuXHJcbiAgZmlsbEZvcmVjYXN0U2VjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UGFnZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJY29uVXJsKGNvZGUpIHtcclxuICBjb25zdCBpY29uT2JqID0gd2VhdGhlckljb25zLmZpbmQoKGljb24pID0+IGljb24uY29kZSA9PT0gY29kZSk7XHJcbiAgY29uc3QgdXJsID0gYGljb25zL2RheS8ke2ljb25PYmouaWNvbn0ucG5nYDtcclxuICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xyXG4gIGNvbnN0IHdlZWtkYXkgPSBbXHJcbiAgICAnU3VuZGF5JyxcclxuICAgICdNb25kYXknLFxyXG4gICAgJ1R1ZXNkYXknLFxyXG4gICAgJ1dlZG5lc2RheScsXHJcbiAgICAnVGh1cnNkYXknLFxyXG4gICAgJ0ZyaWRheScsXHJcbiAgICAnU2F0dXJkYXknLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBmb3JlY2FzdERhdGUgPSBuZXcgRGF0ZSguLi5mb3JtYXREYXRlKGRhdGUpKTtcclxuXHJcbiAgaWYgKGZvcmVjYXN0RGF0ZS5nZXREYXkoKSA9PT0gdG9kYXkuZ2V0RGF5KCkpIHtcclxuICAgIHJldHVybiAnVG9kYXknO1xyXG4gIH1cclxuICByZXR1cm4gd2Vla2RheVtmb3JlY2FzdERhdGUuZ2V0RGF5KCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcclxuICBjb25zdCBzcGxpdERhdGEgPSBkYXRlLnNwbGl0KCctJyk7XHJcbiAgc3BsaXREYXRhWzFdID0gc3BsaXREYXRhWzFdIC0gMTtcclxuICByZXR1cm4gc3BsaXREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBob3VycyA9IE51bWJlcihnZXRIb3VycygpLnNwbGl0KCc6Jykuc2hpZnQoKSk7XHJcbiAgaWYgKGhvdXJzID49IDYgJiYgaG91cnMgPCA4KSB7XHJcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd2YXIoLS1zdW5yaXNlLWdyYWRpZW50KSc7XHJcbiAgfVxyXG4gIGlmIChob3VycyA+PSA4ICYmIGhvdXJzIDwgMTcpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3ZhcigtLWRheS1ncmFkaWVudCknO1xyXG4gIH1cclxuICBpZiAoaG91cnMgPj0gMTcgJiYgaG91cnMgPCAxOSkge1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndmFyKC0tc3Vuc2V0LWdyYWRpZW50KSc7XHJcbiAgfVxyXG4gIGlmIChob3VycyA+PSAxOSB8fCBob3VycyA8IDYpIHtcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3ZhcigtLW5pZ2h0LWdyYWRpZW50KSc7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNhcHR1cmVFbnRlcik7XHJcblxyXG5mdW5jdGlvbiBjYXB0dXJlRW50ZXIoZSkge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgc2VhcmNoKGdldElucHV0VmFsdWUoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5zZWFyY2goJ2xvbmRvbicpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=