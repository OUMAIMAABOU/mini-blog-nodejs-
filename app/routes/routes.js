module.exports = app => {
    const commentaire = require("../controllers/commentaire.controller.js");
    const categorie = require("../controllers/categorie.controller.js");
    var router = require("express").Router();
  
    router.post("/", commentaire.create);
    router.post("/createCategorie", categorie.create);

    router.get("/", commentaire.findAll);
    router.get("/getAllCategorie", categorie.findAll);
    
    router.get("/:id", commentaire.findOne);
    router.get("/:idgetoneCategorie", categorie.findOne);

    router.put("/:id", commentaire.update);
    // router.put("/:idUpdateCategorie", categorie.update);

    router.delete("/:id", commentaire.delete);
  
  
    app.use('/commentaire', router);
    app.use('/categorie', router)
  };
