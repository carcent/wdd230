const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast-container');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.7242&lon=-58.2527&units=imperial&appid=fdf606a19199748261f02509c7ae2a7a';

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
    if (data && data.list && data.list.length > 0) {
        const currentData = data.list[0];
        currentTemp.innerHTML = `${currentData.main.temp}&deg;F`;

        const iconsrc = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
        const desc = currentData.weather[0].description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${desc}`;
    } else {
        console.error("Error: Missing data in the response.");
        captionDesc.textContent = "Unable to fetch weather data.";
    }


    if (data && data.list) {
        const forecastDays = data.list.filter((_, index) => index % 8 === 0).slice(0, 3);

        forecastContainer.innerHTML = '';
        forecastDays.forEach(day => {
            const date = new Date(day.dt * 1000);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
            const temp = day.main.temp;
            const description = day.weather[0].description;
            const iconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

            const dayElement = document.createElement('div');
            dayElement.classList.add('forecast-day');
            dayElement.innerHTML = `
                <h3>${dayName}</h3>
                <img src="${iconSrc}" alt="${description}">
                <p>${description}</p>
                <p>${temp}&deg;F</p>
            `;
            forecastContainer.appendChild(dayElement);
        });
    }
}

apiFetch();