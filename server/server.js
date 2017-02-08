// Setup Express App
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
// Controllers
// var heroCtrl = require('./controllers/heroCtrl');
// Body Parser
app.use(bodyParser.json());
// Hero Endpoints

// Power Endpoints

// Hero_Power Endpoints

// Listen
app.listen(port, () => {
  console.log('Listening on 8080');
})
