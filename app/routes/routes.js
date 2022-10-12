module.exports = app => {
  var router = require("express").Router();
  const Sequelize = require("sequelize");

  const commentaire = require("../controllers/commentaire.controller.js");
  const categorie = require("../controllers/categorie.controller.js");
  const avis = require('../controllers/avis.controller')
  const article = require('../controllers/article.controller')



  
  app.get("/", article.getAllArticles);
  app.get("/article/:url", article.showOneArticle);
  


  app.post("/blog", commentaire.create);
  // router.post("/createAvis", avis.create);
  router.post("/createArticle", article.create);
  router.post("/blog", commentaire.create);
  router.post("/createCategorie", categorie.create);
  // router.post("/createAvis", avis.create);
  router.post("/createComment", commentaire.create);
  app.get("/comments",commentaire.findAllcommentaire);

  
  app.get("/comments/edite/:id", commentaire.findOnecommentaire);
  app.post("/comments/update/:id", commentaire.updatecommentaire);

  
 


  // app.get("/comments/getAllAvis/:id_article",commentaire.count);

  


  app.get("/articles", article.findAllArticles);

  app.get("/articles/edite/:id", article.findOneArticle);
  // router.get("/gitOneAvis/:id", avis.findOne);
  // app.get("/gitOneArticle/:id", article.findOne);
  app.get("/getoneCategorie/:id", categorie.findOnecategorie);
  app.get("/getoneArticleId/:id", categorie.findOnearticle_id);

  app.post("/articles/update", article.UpdateArticle);
  // router.put("/updateAvis/:id", avis.update)
  
  app.get("/comments/delete/:id", commentaire.delete);
  app.get("/articles/delete/:id", article.delete);
  // router.delete("/deleteAvis/:id" , avis.delete)
  app.get ("/deleteCategorie/:id", categorie.delete);
  app.post("/updateCategorie", categorie.updatecategorie);
  app.get("/getoneCategorie/:id", categorie.findOnecategorie);
  app.get("/categories", categorie.findAllCategoriesdash);
  
  app.get("/comments/findbyname/:nom",commentaire.findbyname);


  app.use('/comments', router);
  app.use('/articles', router);
  // app.use('/avis', router);
  app.use('/categories', router)
};
