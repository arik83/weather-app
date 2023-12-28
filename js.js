// OpenWeatherMap API key
const API_KEY = 'e3af4f72c98ab7325a70554efe616ff7';

// DOM elements
const form = document.getElementById('weatherForm'); // Form element
const search = document.getElementById('search'); // Input field for city search
const weatherIcon = document.getElementById('weatherIcon'); // Image element for weather icon
const temperature = document.getElementById('temperature'); // Element for temperature display
const weatherDescription = document.getElementById('weatherDescription'); // Element for weather description display

// Function to fetch weather data from OpenWeatherMap API
const getWeather = async (city) => {
     // API endpoint URL
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

     // Fetch data from the API
     const response = await fetch(url);

     // Parse response data as JSON
     const data = await response.json();

     // Display weather information on the page
     return showWeather(data);
}

// Function to display weather information on the page
const showWeather = (data) => {
     // Check if the city is not found
     if (data.cod == '404') {
          weather.innerHTML = '<h2>City Not Found</h2>';
          return;
     }

     // Construct URL for weather icon image
     const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

     // Set the source of the weather icon image
     weatherIcon.src = iconURL;

     // Display temperature and weather description
     temperature.textContent = `${data.main.temp} ℃`;
     weatherDescription.textContent = data.weather[0].main;
}

// Event listener for form submission
form.addEventListener(
     'submit',
     function (event) {
          // Get weather data for the entered city
          getWeather(search.value);

          // Prevent the default form submission behavior
          event.preventDefault();
     }
);
