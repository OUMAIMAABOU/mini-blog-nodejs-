module.exports = app => {
  var router = require("express").Router();
  const commentaire = require("../controllers/commentaire.controller.js");
  const categorie = require("../controllers/categorie.controller.js");
  const avis = require('../controllers/avis.controller')
  const article = require('../controllers/article.controller')

  
  app.post("/blog", commentaire.create);
  // app.post("/blog", avis.create);
  router.post("/createArticle", article.create);
  router.post("/createCategorie", categorie.create);

  app.get("/comments", commentaire.findAllcommentaire);
  // router.get("/showAllAvis", avis.findAll);
  router.get("/showAllArticles", article.findAll);
  router.get("/getAllCategorie", categorie.findAll);

  app.get("/comments/edite/:id", commentaire.findOnecommentaire);
  // router.get("/gitOneAvis/:id", avis.findOne);
  router.get("/gitOneArticle/:id", article.findOne);
  router.get("/getoneCategorie/:id", categorie.findOne);

  app.post("/comments/update", commentaire.updatecommentaire);
  // router.put("/updateAvis/:id", avis.update)
  router.put("/updateArticle/:id", article.update)
  router.put("/UpdateCategorie/:id", categorie.update);
  
  app.get("/comments/delete/:id", commentaire.delete);
  // router.delete("/deleteAvis/:id" , avis.delete)
  router.delete("/deleteArticle/:id" , article.delete)
  router.delete("/deleteCategorie/:id", categorie.delete);

  app.use('/comments', router);
  app.use('/article', router);
  // app.use('/avis', router);
  app.use('/categorie', router)

};
