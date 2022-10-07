const { commentaire, article } = require("../models");
const db = require("../models");
const Commentaire = db.commentaire;
exports.create = (req, res) => {
    const commentaires = {
        email: req.body.email,
        nom: req.body.nom,
        commentaire: req.body.commentaire,
        articleId:"1"
      };
          Commentaire.create(commentaires)
        .then(
          res.redirect('/comments')
        )
        .catch(err => {
          res.status(500).send({
            message:
              err.message 
          });
        });
};
exports.findAllcommentaire = (req, res  ) => {
  commentaire.findAll({ order: [
    ['id', 'DESC']
],})
  .then(data => {
      res.render('avisComme',{'commantaire':data})
    })
.catch(err => {
      console.log(err )  
});
}

exports.findOnecommentaire = (req, res) => {
const id = req.params.id;
commentaire.findByPk(id)
    .then(data => {
        if (data) {
          res.render('updatecomment',{'data':data})
        } else {
            res.status(404).send({
                message: `Cannot find avis with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving avis with id=" + id
        });
    });
};

exports.updatecommentaire = (req, res) => {
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire, 
    // articleId:"1"
  };

  Commentaire.update(commentaires, {
    where: { id : req.body.id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/comments')
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating " + id
      });
    });
};
  


exports.delete = (req, res) => {
  Commentaire.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/comments');
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
// Commentaire.belongsTo(db.article); 