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

exports.getAllArticles = (req, res  ) => {
  article.findAll({ order: [
    ['id', 'DESC']
  ],})
    .then(data => {
        res.render('homePage',{'articles':data})
      })
  .catch(err => {
        console.log(err )  
  });
}

exports.findOneArticle = (req, res) => {
  const id = req.params.id;
  article.findByPk(id)
    .then(data => {
        if (data) {
          res.render('updateArticle',{'data':data})
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

exports.showOneArticle = (req, res) => {
  const id = req.params.id;
  article.findByPk(id)
    .then(data => {
        if (data) {
          res.render('blog_details',{'data':data})
        } else {
            res.status(404).send({
                message: `Cannot find article with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving article with id=" + id
    });
  });
};

exports.UpdateArticle = (req, res) => {
  const article = {
    title: req.body.title,
    url: req.body.url,
    contenu: req.body.contenu,
  };

  Article.update(article, {
    where: { id : req.body.id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/articles')
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating " + id
      });
    });
};

exports.delete = (req, res) => {
  Article.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/articles');
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