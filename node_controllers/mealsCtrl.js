var meals = require('../models/meals.js');

module.exports = {
  selectByProperty: function(req, res, next) {
    let q = req.query;
    if (q.name) {
      let filtered = meals.filter(function(meals) {
        return meals.name === q.name;
      });
      return res.status(200).json(filtered);
    }
    if (q.time) {
      let filtered = meals.filter(function(meals) {
        return meals.time === q.time;
      });
      return res.status(200).json(filtered);
    }
    if (q.duration) {
      let filtered = meals.filter(function(meals) {
        return meals.duration === q.duration;
      });
      return res.status(200).json(filtered);
    }
    res.status(200).json(meals);
  },

  index: function(req, res, next) {
    res.status(200).json(meals)
  },

  select: function(req, res, next) {
    let id = parseInt(req.params.id)
    res.status(200).json(meals[id])
  },

  create: function(req, res, next) {
    let nuItem = req.body;
    meals.push(nuItem);
    res.status(200).json(meals);
  },

  update: function(req, res, next) {
    let id = parseInt(req.params.id);
    console.log('id from update ', id);
    let nuItem = req.body;
    meals.splice(id, 1, nuItem);
    res.status(200).json(meals)
  },
  destroy: function(req, res, next) {
    let id = parseInt(req.params.id);
    meals.splice(id, 1);
    res.status(200).json(meals)
  }
};
