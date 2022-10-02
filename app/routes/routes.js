module.exports = app => {
  const commentaire = require("../controllers/commentaire.controller.js");
  const avis = require('../controllers/avis.controller')

  var router = require("express").Router();

  router.post("/", commentaire.create);
  router.post("/createAvis", avis.create);

  router.get("/", commentaire.findAll);
  router.get("/showAllAvis", avis.findAll);


  router.get("/:id", commentaire.findOne);
  router.get("/gitOneAvis/:id", avis.findOne);

  router.put("/:id", commentaire.update);
  router.put("/updateAvis/:id", avis.update)

  router.delete("/:id", commentaire.delete);
  router.delete("/deleteAvis/:id" , avis.delete)


  app.use('/commentaire', router);
  app.use('/avis', router);
};
