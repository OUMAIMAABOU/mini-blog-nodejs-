const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


// set port, listen for requests


const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

  require("./app/routes/commentaire.routes")(app);
  const port=process.env.port||8080
  app.listen(port,()=>{
    console.log('sever is run',port)
  })
