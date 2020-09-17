const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>hello world </h1>");
});

app.get("/contact", (request, response) => {
  response.send("email@googlemail.com");
});

app.get("/about", (request, response) => {
  response.send("i am lee");
});

app.listen(3000, () => {
  console.log("portal 3000 running");
});
