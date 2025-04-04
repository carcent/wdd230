const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=fdf606a19199748261f02509c7ae2a7a';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data);
            displayResults(data);
        } else {
            const errorText = await response.text();
            throw new Error(errorText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(data) {

    if (data && data.main && data.weather && data.weather[0]) {

        currentTemp.innerHTML = `${data.main.temp}&deg;F`;


        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


        let desc = data.weather[0].description;


        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);

        captionDesc.textContent = `${desc}`;
    } else {
        console.error("Error: Missing data in the response.");
        captionDesc.textContent = "Unable to fetch weather data.";
    }
}

apiFetch();