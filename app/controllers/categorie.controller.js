const db = require("../models");
const Categorie = db.categorie;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const categories = {
        email: req.body.email,
        nom: req.body.nom,
        categorie: req.body.categorie 
    };
    Categorie.create(categories).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
};