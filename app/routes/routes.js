module.exports = app => {
  var router = require("express").Router();
  
  const commentaire = require("../controllers/commentaire.controller.js");
  const categorie = require("../controllers/categorie.controller.js");
  const avis = require('../controllers/avis.controller')
  const article = require('../controllers/article.controller')

  
  router.post("/", commentaire.create);
  router.post("/createAvis", avis.create);
  router.post("/createArticle", article.create);
  router.post("/createCategorie", categorie.create);

  app.get("/comments", commentaire.findAllcommentaire);
  router.get("/showAllAvis", avis.findAll);
  router.get("/showAllArticles", article.findAll);
  app.get("/categories", categorie.findAllCategoriesdash);
  app.get("/", categorie.findAllCategorieshome);
  

  app.get("/comments/edite/:id", commentaire.findOnecommentaire);
  router.get("/gitOneAvis/:id", avis.findOne);
  router.get("/gitOneArticle/:id", article.findOne);
  app.get("/getoneCategorie/:id", categorie.findOnecategorie);
  app.get("/getoneArticleId/:id", categorie.findOnearticle_id);

  app.post("/comments/update", commentaire.updatecommentaire);
  router.put("/updateAvis/:id", avis.update)
  router.put("/updateArticle/:id", article.update)
  app.post("/updateCategorie", categorie.updatecategorie);
  
  app.get("/comments/delete/:id", commentaire.delete);
  router.delete("/deleteAvis/:id" , avis.delete)
  router.delete("/deleteArticle/:id" , article.delete)
  app.get ("/deleteCategorie/:id", categorie.delete);

  app.use('/comments', router);
  app.use('/article', router);
  app.use('/avis', router);
  app.use('/categories', router)
};
