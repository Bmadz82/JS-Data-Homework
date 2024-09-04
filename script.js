let weather = {
    paris: {
        temp: 19.7,
        humidity: 80,
    },
    tokyo: {
        temp: 17.3,
        humidity: 50,
    },
    lisbon: {
        temp: 30.2,
        humidity: 20,
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100,
    },
    moscow: {
        temp: -5,
        humidity: 20,
    },
};

function findTemperature() {
    let cityInput = prompt('Enter a city').toLowerCase();

    if (weather[cityInput]) {
        alert(`The temperature in ${cityInput} is ${weather[cityInput].temp}°C with ${weather[cityInput].humidity}% humidity.`);
    } else {
        alert(
            "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" + cityInput
        );
    }
}
