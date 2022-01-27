// Fetching data
const axios = require("axios");
require("dotenv").config();

// First Sentences
console.log("Weather Forecast: ");

axios
  .get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=-6.2146&lon=106.8451&exclude=hourly,minutely,alerts,current&appid=${process.env.API_WEATHER}`
  )
  .then(({ data }) => {
    data = data.daily.map((e) => {
      e.dt = new Date(e.dt * 1000).toString();
      e.dt = e.dt.split(" ");
      e.temp.day = e.temp.day - 273.15;
      let result = `${e.dt[0]}, ${e.dt[2]} ${e.dt[1]} ${
        e.dt[3]
      }: ${e.temp.day.toFixed(2)}°C`;
      // Result Output
      console.log(result);
    });
  })
  .catch((err) => {
    console.log(err);
  });
