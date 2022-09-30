const {commentaire } = require('../models');
const db = require('../models');
const slug = require('slug')

const Article = db.article;
exports.create = (req, res) => {
    const article = {
      article_url: slug(req.body.title),
      article_title: req.body.title,
      article_contenu: req.body.contenu 
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
  const slug = req.params.slug;
  Article.findOne({where: {article_url: slug}
  }).then(data => {
        if (data) {
          res.render('blog_details',{'data':data,})
        } else {
            res.status(404).send({
                message: `Cannot find Article `
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Article"
        });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const article = {
    article_url: slug(req.body.title),
    article_title: req.body.title,
    article_contenu: req.body.contenu 
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