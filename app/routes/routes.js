module.exports = app => {
  var router = require("express").Router();
  const commentaire = require("../controllers/commentaire.controller.js");
  const categorie = require("../controllers/categorie.controller.js");
  const avis = require('../controllers/avis.controller')
  const article = require('../controllers/article.controller')



  
  app.get("/", article.getAllArticles);
  app.get("/article/:url", article.showOneArticle);

  router.post("/createComment", commentaire.create);
  router.post("/createAvis", avis.create);
  router.post("/createArticle", article.create);
  router.post("/createCategorie", categorie.create);

  app.get("/comments",commentaire.findAllcommentaire);
  router.get("/showAllAvis", avis.findAll);
  app.get("/articles", article.findAllArticles);
  app.get("/categories", categorie.findAllCategories);

  app.get("/comments/edite/:id", commentaire.findOnecommentaire);
  app.get("/articles/edite/:id", article.findOneArticle);
  router.get("/gitOneAvis/:id", avis.findOne);
  router.get("/getoneCategorie/:id", categorie.findOne);

  app.post("/comments/update", commentaire.updatecommentaire);
  app.post("/articles/update", article.UpdateArticle);
  router.put("/updateAvis/:id", avis.update)
  router.put("/UpdateCategorie/:id", categorie.update);
  
  app.get("/comments/delete/:id", commentaire.delete);
  app.get("/articles/delete/:id", article.delete);
  router.delete("/deleteAvis/:id" , avis.delete)
  router.delete("/deleteCategorie/:id", categorie.delete);

  app.use('/comments', router);
  app.use('/articles', router);
  app.use('/avis', router);
  app.use('/categories', router)

};
