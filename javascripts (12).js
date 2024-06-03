function getWeather() {
    var cityInput = document.getElementById("cityInput").value;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}/2022-07-15/2022-07-20?unitGroup=metric&contentType=json&include=days&key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log("Error fetching weather data: ", error);
        });
}

function displayWeather(data) {
    // Assuming data structure from the Visual Crossing Weather API
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.resolvedAddress}</h2>
        <p>Temperature: ${data.days[0].temp}°C</p>
        <p>Weather: ${data.days[0].conditions}</p>
        <p>Humidity: ${data.days[0].humidity}%</p>
    `;
}
