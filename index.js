let input = document.querySelector("input");
let button = document.querySelector("button");
let info = document.querySelector(".info");

button.addEventListener("click", function (event) {
    event.preventDefault();

    let CityName = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=2d60f525cd75dd81b166855758cb0334`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let country = data.name;
        let temp = Math.round(data.main.temp - 273.15);
        let windSpeed = data.wind.speed;
        let humidity = data.main.humidity;

        let box = document.createElement("div");
        let countryEL = document.createElement("h2");
        let tempEL = document.createElement("p");
        let humEl = document.createElement("li");
        let windSpEl = document.createElement("li");
        let list = document.createElement("ul");

        countryEL.textContent = country;
        tempEL.textContent = `${temp} °C`;
        humEl.textContent = `Humidity: ${humidity}%`;
        windSpEl.textContent = `Wind Speed: ${windSpeed} km/h`;

        list.appendChild(humEl);
        list.appendChild(windSpEl);

        box.appendChild(countryEL);
        box.appendChild(tempEL);
        box.appendChild(list);

        info.appendChild(box);
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
});
