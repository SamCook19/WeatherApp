window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = 37;
            apiKey = '71caedaf0dd3f0097725f0b5344a19f3';

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat},&lon=${long}&appid=${apiKey}`;
            fetch (api)
            .then(data => {
                return data.json()
                
            })
            .then(
                data => {
                    console.log(data)
                }
            )
        });
       
    }else {
        h1.textContent = "enable geolocation"
    }
});