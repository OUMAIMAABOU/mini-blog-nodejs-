module.exports = app => {
  // const commentaire = require("../controllers/commentaire.controller.js");
  const avis = require('../controllers/avis.controller.js')

  var router = require("express").Router();

  // router.post("/", commentaire.create);
  router.post("/", avis.create);

  // router.get("/", commentaire.findAll);
  
  
  // router.get("/:id", commentaire.findOne);

  // router.put("/:id", commentaire.update);

  // router.delete("/:id", commentaire.delete);


  // app.use('/commentaire', router);
  app.use('/avis', router);
};
