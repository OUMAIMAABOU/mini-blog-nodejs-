module.exports = app => {
  var router = require("express").Router();
  const commentaire = require("../controllers/commentaire.controller.js");
  const categorie = require("../controllers/categorie.controller.js");
  const avis = require('../controllers/avis.controller')

  

  router.post("/", commentaire.create);
  router.post("/createAvis", avis.create);
  router.post("/createCategorie", categorie.create);


  router.get("/", commentaire.findAll);
  router.get("/showAllAvis", avis.findAll);
  router.get("/getAllCategorie", categorie.findAll);



  router.get("/:id", commentaire.findOne);
  router.get("/gitOneAvis/:id", avis.findOne);
  router.get("/getoneCategorie/:id", categorie.findOne);


  router.put("/:id", commentaire.update);
  router.put("/updateAvis/:id", avis.update)
  router.put("/UpdateCategorie/:id", categorie.update);


  router.delete("/:id", commentaire.delete);
  router.delete("/deleteAvis/:id" , avis.delete)
  router.delete("/deleteCategorie/:id", categorie.delete);



  app.use('/commentaire', router);
  app.use('/avis', router);
  app.use('/categorie', router)

};
