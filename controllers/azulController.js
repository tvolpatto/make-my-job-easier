const db = require("../models");

// Defining methods for the azulController
module.exports = {
  findAll: function(req, res) {
    db.Azul
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));

  },
  findById: function(req, res) {
    db.Azul
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Azul
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Azul
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Azul
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
