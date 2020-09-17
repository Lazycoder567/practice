const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const unit = "metric";
  const apiKey = "cf175184a0d9562b8a8e313050e3da7d";
  const location = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey +
    "&units=" +
    unit +
    "";
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(icon);
      res.write("<p>the weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1> the weather in " +
          location +
          " is " +
          temp +
          " degrees Celsius </h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log("your server is running on port 3000");
});
