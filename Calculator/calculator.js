const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send(
    "thanks for posting that the result of the calculation is " + result
  );
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  console.log(req.body);

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = weight / (height * height);

  res.send("your BMI is " + bmi);
});

app.listen(port, () => {
  console.log("server is running on 3000");
});
