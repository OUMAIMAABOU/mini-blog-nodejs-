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
              err.message 
          });
        });
};

exports.findAll = (req, res) => {
  
  Commentaire.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};


exports.findOne = (req, res) => {
  
};
exports.update = (req, res) => {
  const id = req.params.id;
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire 
  };

  Commentaire.update(commentaires, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating " + id
      });
    });
};
  


exports.delete = (req, res) => {
  const id = req.params.id;

  Commentaire.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "successfully!"
        });
      } else {
        res.send({
          message: `not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: " id=" + id +"not existe"
      });
    });
};