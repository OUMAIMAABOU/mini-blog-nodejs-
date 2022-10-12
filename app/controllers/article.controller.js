const { article, commentaire } = require('../models');
const db = require('../models');
const slug = require('slug')

const Article = db.article;


exports.create = (req, res) => {
  const article = {
      title: req.body.title,
      url:slug(req.body.title),
      contenu: req.body.contenu,
      categorie_id: req.body.categorie_id
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

exports.findAllArticles = async(req, res  ) => {
  
  let data={}
  let data2={}
  data= await article.findAll({ order: [
    ['id', 'DESC']
  ],}) 
  data2 = await db.categorie.findAll()

        res.render('articles',{'articles':data,'categories':data2, 'is_linked':'articles'})
   
}

exports.getAllArticles = async(req, res  ) => {
  let data={}
  let data2={}
  data= await article.findAll({ order: [
    ['id', 'DESC']
  ],}) 
  data2 = await db.categorie.findAll()

        res.render('homePage',{'articles':data,'categories':data2})
   
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
            message: err 
    });
  });
};

exports.showOneArticle = (req, res) => {
  const url = req.params.url;
  article.findOne({
    where: {
        url: url
    }
    }).then(data => {
        if (data) {
          res.render('blog_details',{'articles':data})
          // res.send(data)
        } else {
            res.status(404).send({
                message: `Cannot find article with id=${url}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving article with id=" + url
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