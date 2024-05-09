'use strict';

async function getWeather() {
  try {
    const city = document.querySelector('#cityInput').value;
    const apiKey = '8a12db13bdbcc785aa243b57fff9955a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    function kelvinToCelsius(kelvin) {
      return kelvin - 273.15;

    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherResult = document.querySelector('#weatherResult');

    weatherResult.innerHTML = `

<h2>${data.name}, ${data.sys.country}</h2>
<p>天気：${data.weather[0].description}</p>
<p>気温：${kelvinToCelsius(data.main.temp).toFixed(2)}℃</p>

`;
  } catch (error) {
    console.error('Error fetching weather', error);
  }
}