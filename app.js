window.addEventListener('load', () => {
    let long;
    let city;
    let apiKey;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone")

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            city = 'Cedar City';
            apiKey = '71caedaf0dd3f0097725f0b5344a19f3';

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
            fetch (api)
            .then(data => {
                return data.json()
                
            })
            .then(
                data => {
                    console.log(data);
                    const { temp, feels_like, weather } = data.main;
                    
                    // Setting DOM elements from API

                    temperatureDegree.textContent = temp
                    temperatureDescription.textContent = feels_like
                    locationTimezone.textContent = data.name
                }
            )
        });
       
    }

    
});