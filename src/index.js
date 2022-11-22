import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// window.onload = function() {
//   let getLocationButton = document.getElementById("getLocationButton");
// console.log(getLocationButton);

// /**
//  * Adds functionality to location button.
//  * Retrieves current lat/long positions using geolocation.
//  */
// getLocationButton.addEventListener("click", () => {
//   // loader.style.display = 'block';
//   navigator.geolocation.getCurrentPosition((position) => {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     getWeatherData(lat, long);
//   });
// });

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// var appid = "7ded7e19fcf114db598fcdfd64563b66";

// /**
//  * Fetches Open Weather Data API.
//  * @param {string} latitude - Current latitude.
//  * @param {string} longitude - Current longitude.
//  */
// async function getWeatherData(latitude, longitude) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}`,
//     requestOptions
//   );
//   var data = await response.json();
//   console.log(data); // Use this to explore the API response

//   displayData(data);
//   // loader.style.display = 'none';
// }

// /**
//  * Displays the weather data via HTML.
//  * @param {object} data - Open Weather Data API JSON response.
//  */
// function displayData(data) {
//   var cityName = data.name;
//   var icon = data.weather[0].icon;

//   document.getElementById("city").innerHTML = cityName;
//   document.getElementById("temp").innerHTML = convertToFahrenheit(
//     data.main.temp
//   );
//   document.getElementById(
//     "icon"
//   ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
// }

// /**
//  * Converts Kelvin to Fahrenheit temperature scale.
//  * @param {string} temp - The title of the book.
//  * @returns {string} Current temperature in Fahrenheit.
//  */
// function convertToFahrenheit(temp) {
//   return Math.trunc((temp - 273.15) * 1.8 + 32) + "&deg; F";
// }


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// }