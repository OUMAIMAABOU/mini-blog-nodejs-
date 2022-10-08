const { article } = require('../models');
const db = require('../models');
const slug = require('slug')

const Article = db.article;

exports.create = (req, res) => {
  const article = {
      title: req.body.title,
      url: req.body.url,
      contenu: req.body.contenu,
    };
        Article.create(article)
      .then(
        res.redirect('/articles')
      )
      .catch(err => {
        res.status(500).send({
          message:
            err.message 
        });
      });
};

exports.findAllArticles = (req, res  ) => {
  article.findAll({ order: [
    ['id', 'DESC']
],})
  .then(data => {
      res.render('articles',{'articles':data,'is_linked':'articles'})
    })
.catch(err => {
      console.log(err )  
});
}

exports.findOne = (req, res) => {
  
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