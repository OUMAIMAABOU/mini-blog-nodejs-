module.exports = app => {
    const commentaire = require("../controllers/commentaire.controller.js");

    var router = require("express").Router();
  
    router.post("/", commentaire.create);
  
    router.get("/", commentaire.findAll);
    
    
    router.get("/:id", commentaire.findOne);
  
    router.put("/:id", commentaire.update);
  
    router.delete("/:id", commentaire.delete);
  
  
    app.use('commentaire', router);
  };