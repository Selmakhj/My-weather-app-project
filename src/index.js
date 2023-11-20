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
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

//or

let city = prompt("Enter a city");
if (city === "paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)}°C (${Math.round(
      (weather.paris.temp * 9) / 5 + 32
    )}°F) in paris with a humidity of ${weather.paris.humidity}%.`
  );
} else {
  if (city === "tokyo") {
    alert(
      `It is currently ${Math.round(weather.tokyo.temp)}°C (${Math.round(
        (weather.tokyo.temp * 9) / 5 + 32
      )}°F) in tokyo with a humidity of ${weather.tokyo.humidity}%.`
    );
  } else {
    if (city === "lisbon") {
      alert(
        `It is currently ${Math.round(weather.lisbon.temp)}°C  (${Math.round(
          (weather.lisbon.temp * 9) / 5 + 32
        )}°F) in lisbon with a humidity of ${weather.lisbon.humidity}%.`
      );
    } else {
      if (city === "san francisco") {
        alert(
          `It is currently ${Math.round(
            weather["san francisco"].temp
          )}°C (${Math.round(
            (weather["san francisco"].temp * 9) / 5 + 32
          )}°F) in san francisco with a humidity of ${
            weather["san francisco"].humidity
          }%.`
        );
      } else {
        if (city === "oslo") {
          alert(
            `It is currently ${Math.round(weather.oslo.temp)}°C (${Math.round(
              (weather.oslo.temp * 9) / 5 + 32
            )}°F) in oslo with a humidity of ${weather.oslo.humidity}%.`
          );
        } else {
          alert(
            "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+dd"
          );
        }
      }
    }
  }
}
//or
