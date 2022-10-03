const { article } = require('../models');
const db = require('../models');
const Article = db.article;


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
  Article.findAll()
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
  const article = {
    email: req.body.email,
    nom: req.body.nom,
    article: req.body.article 
  };

  Article.update(article, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated successfully."
        });
      } else {
        res.send({
          message: `cant update`
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

  Article.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "successfully deleted!"
        });
      } else {
        res.send({
          message: `not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: " id=" + id + "not existe"
      });
    });
};