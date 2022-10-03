const db = require("../models");
const article = db.article;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const article = {
        email: req.body.email,
        nom: req.body.nom,
        article: req.body.article 
      };
      article.create(article)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};

exports.show = (req, res) => {
  console.log('hi oumzizbou')
};

exports.findAll = (req, res) => {
  
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};