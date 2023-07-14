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

async function fetchWeatherData(query) {
  const data = await fetch(getFormatUrl(query), { mode: 'cors' });
  return await getJsonData(data);
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

export { fetchWeatherData, getNecessaryData };
