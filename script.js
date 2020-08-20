const express = require("express");
const app = express();
const https = require("https");
require('dotenv').config();
const api_key = process.env.API_KEY;

const url = "https://maps.googleapis.com/maps/api/js?key=api_key&callback=myMap";

app.get("/", function(req, res) {

  https.get(url, function(response) {
    console.log(response.statusCode);
  });

  res.write("server is running");
  res.send();

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
