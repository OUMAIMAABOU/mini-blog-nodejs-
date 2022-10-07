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

<<<<<<< HEAD
  // router.get("/", commentaire.findAll);
=======
  app.get("/comments", commentaire.findAllcommentaire);
>>>>>>> dev
  router.get("/showAllAvis", avis.findAll);
  router.get("/showAllArticles", article.findAll);
  router.get("/getAllCategorie", categorie.findAll);

<<<<<<< HEAD

  router.get("/:id", commentaire.findOne);
=======
  app.get("/comments/edite/:id", commentaire.findOnecommentaire);
>>>>>>> dev
  router.get("/gitOneAvis/:id", avis.findOne);
  router.get("/gitOneArticle/:id", article.findOne);
  app.get("/getoneCategorie/:id", categorie.findOne);

<<<<<<< HEAD
  // router.put("/:id", commentaire.update);
  router.put("/updateAvis/:id", avis.update)
  router.put("/updateArticle/:id", article.update)
  // router.put("/UpdateCategorie/:id", categorie.update);
  router.post("/UpdateCategorie", categorie.update);


  router.delete("/:id", commentaire.delete);
=======
  app.post("/comments/update", commentaire.updatecommentaire);
  router.put("/updateAvis/:id", avis.update)
  router.put("/updateArticle/:id", article.update)
  router.put("/UpdateCategorie/:id", categorie.update);
  
  app.get("/comments/delete/:id", commentaire.delete);
>>>>>>> dev
  router.delete("/deleteAvis/:id" , avis.delete)
  router.delete("/deleteArticle/:id" , article.delete)
  app.get ("/deleteCategorie/:id", categorie.delete);

  app.use('/comments', router);
  app.use('/article', router);
  app.use('/avis', router);
  app.use('/categorie', router)
};
