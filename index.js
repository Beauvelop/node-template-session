const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

let mealsCtrl = require('./node_controllers/mealsCtrl');
let queryLog = require('./queryLog')

const app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

app.use(session({
  secret: 'lkjsdflkjsdflkj', //don't worry about this 4 now.
  saveUninitialized: false,
  resave: false
}));


app.get('/api/meals/', queryLog, mealsCtrl.selectByProperty);
app.get('/api/meals', queryLog, mealsCtrl.index);
app.get('/api/meals/:id', queryLog, mealsCtrl.select);

app.post('/api/meals', queryLog, mealsCtrl.create);
app.put('/api/meals/:id', queryLog, mealsCtrl.update);
app.delete('/api/meals/:id', queryLog, mealsCtrl.destroy);

app.get('/api/favorites', queryLog, function(req, res, next) {
  res.status(200).json(req.session.favorites || []);
})

app.post('/api/favorites', queryLog, function(req, res, next) {
  if (!req.session.favorites) {
    req.session.favorites = []
  }
  req.session.favorites.push(req.body);
  res.status(200).json(req.session.favorites);
})


const PORT = 3000;
app.listen(PORT, function() {
  console.log("Listening on ", PORT);
})
