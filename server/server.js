// Setup Express App
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
// Controllers
const heroCtrl = require('./controllers/heroCtrl');
// Body Parser
app.use(bodyParser.json());
// Hero Endpoints
app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:id', heroCtrl.getHero);
app.post('/api/heroes', heroCtrl.create);

// Power Endpoints

// Hero_Power Endpoints

// Listen
app.listen(port, () => {
  console.log('Listening on 8080');
})
