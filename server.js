const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const fetch = require('node-fetch');

const url = "https://samples.openweathermap.org/data/2.5/forecast";

app.use(bodyParser.json());

// Add headers for CORS connection
// -------------------------------
// https://stackoverflow.com/questions/18642828/origin-http-localhost3000-is-not-allowed-by-access-control-allow-origin
// [...] Since they are running on different ports, they are different JavaScript origin. It doesn't matter that they are on the same machine/hostname.
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); // <-

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


var staticRules = [
  { rulename: "Must be 5 characters" },
  { rulename: "Must be used elsewhere" },
  { rulename: "Must be cool" }
];


app.get('/getRules', function (req, res) {

  console.log('GET /getRules');

  res.status(200).send(staticRules);
});


app.post('/insertRule', function (req, res) {
  console.log('POST /insertRule', req.body);

  staticRules.push(req.body);

  res.status(200).send(staticRules);
});


// Il server fa una chiamata all'api del servizio web di meteorologia
// si aspetta un body così:
// {
// 	"q": "Florence",
// 	"appid": "aaaaa"
// }
app.get('/weather/getForecast', async function (req, res) {

  console.log('GET /mock/getWeather');
  console.log(req.body);

  var q = req.body.q;
  var appid = req.body.appid;

  console.log(q, appid);

  var queryString = `?q=${q}&appid=${appid}`;

  const response = await fetch(url + queryString);
  const json = await response.json();

  res.status(200).send(json);
});


// endpoint di test per $q.all
app.get('/dev/getRandomName', function (req, res) {

  var random = require('random-name');
  setTimeout(function() {
    res.status(200).send(random());
  }, 750);
  
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});