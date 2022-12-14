const { commentaire, article } = require("../models");
const db = require("../models");
const Commentaire = db.commentaire;
const Sequelize = require("sequelize");

exports.create = (req, res) => {
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire,
    avis: req.body.avis,
    articleId:req.body.articleId
  };
  Commentaire.create(commentaires)
    .then(
      res.redirect('/article/'+ req.body.url)
    )
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};
exports.findAllcommentaire =async (req, res  ) => {
  let data={}
  let data2={}
   data  = await commentaire.findAll({ order: [['id', 'DESC']],include:article,  raw: true, nest: true})
  data2 = await article.findAll()
    return  res.render('avisComme',{data,data2,'is_linked':'comments'})
}
exports.findOnecommentaire = (req, res) => {
  const id = req.params.id;
  commentaire.findByPk(id)
    .then(data => {
      if (data) {
        res.render('updatecomment', { 'data': data })
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

exports.findbyname =  async(req, res) => {
  const comm = await commentaire.findAll(
   {
     where : { nom : req.params.nom },
     raw: true,
     nest: true,
   }
  )
console.log(comm)

 }


 exports.showallarticlecommentaire = (req, res) => {
  commentaire.findAll({
    where: {
      articleId: req.params.id
    }, include:commentaire,  raw: true, nest: true
    }).then(data => {
       
        console.log(data)
     
        })
   
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving article with id=" + url
    });
  });
};
exports.updatecommentaire = (req, res) => {
  const commentaires = {
    email: req.body.email,
    nom: req.body.nom,
    commentaire: req.body.commentaire,
    avis: req.body.avis,
  };
  Commentaire.update(commentaires, {
    where: { id : req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.redirect('/comments')
      }
    })
    .catch(err => {
      res.status(500).send({
        message:err
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
        message: " id=" + id + "not existe"
      });
    });
};
Commentaire.belongsTo(db.article); 
article.hasMany(Commentaire); 

