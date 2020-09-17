const express = require('express')

const app = express()

app.get("/",function (req, res) {
	res.send("<h1>hello world</h1>");
});

app.get("/about",function (req, res) {
	res.send("about me");
});

app.listen(3000,function(){
	console.log("server running on port 3000");
});