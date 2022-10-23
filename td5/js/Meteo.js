let apiKey = '733bd996a0e9bc601d46436677b366e0'; 
let city = localStorage.getItem('city');
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let communeDisplay = document.querySelector('#commune');
let temperatureDisplay = document.querySelector('#temperature');
let ressentieDisplay = document.querySelector('#ressentie');
let minimaleDisplay = document.querySelector('#minimale');
let maximaleDisplay = document.querySelector('#maximale');
let tempsDisplay = document.querySelector('#temps');
let pourcentageHumiditeDisplay = document.querySelector('#pourcentageHumiditer');

async function getMeteo() {
    let data = await fetch(url, {
        method: 'get'
    })
    data = await data.json();
    communeDisplay.innerHTML = data.name;
    temperatureDisplay.innerHTML = `${data.main.temp} °C`;
    ressentieDisplay.innerHTML = `${data.main.feels_like} °C`;
    minimaleDisplay.innerHTML = `${data.main.temp_min} °C`;
    maximaleDisplay.innerHTML = `${data.main.temp_max} °C`;
    tempsDisplay.innerHTML = data.weather[0].description;
    pourcentageHumiditeDisplay.innerHTML = `${data.main.humidity} %`;
}

async function addMeteoToDom() {
   await getMeteo();
}
addMeteoToDom();