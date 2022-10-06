const { commentaire } = require("../models");
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
        .then(
          res.redirect('/commentaire')
        )
        .catch(err => {
          res.status(500).send({
            message:
              err.message 
          });
        });
};


exports.findAllcommentaire = () => {
  return Commentaire.findAll()

}

exports.findOnecommentaire = (req, res) => {
  const id = req.params.id;
console.log(req.params.id)
  return Commentaire.findByPk(id)
};

exports.updatecommentaire = (req, res) => {
  const id = req.params.id;
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire 
  };

  Commentaire.update(commentaires, {
    where: { id : id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/commentaire')
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
        res.redirect('/commentaire');


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

