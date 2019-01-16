var express = require('express');
var bodyParser = require('body-parser')
var app = express();

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



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});