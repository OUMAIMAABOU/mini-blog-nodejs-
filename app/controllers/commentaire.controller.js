const db = require("../models");
const Commentaire = db.commentaire;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const commentaires = {
        email: req.body.email,
        nom: req.body.nom,
        commentaire: req.body.commentaire 
      };
          Commentaire.create(commentaires)
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