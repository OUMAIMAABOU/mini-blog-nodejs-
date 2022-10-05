const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.static('public'))

const { findAllcommentaire}   = require('./app/controllers/commentaire.controller.js')

const db = require("./app/models");


db.sequelize.sync()
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.set('views','./views/dashboard')
app.set('view engine','ejs')
// app.use(express.static(__dirname + '/views/homePage'));


app.get("/dash", (req, res) => {
  res.render('dashboard');
});

// app.get("/", (req, res) => {
//   res.render('homePage');
// });


app.get('/commentaire', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('avisComme', {commantaire})
})

app.get('/commentaire/:id', async(req, res) => {
  
})




require("./app/routes/routes")(app);
  const port=process.env.PORT || 8080
  console.log('The value of PORT is:', process.env.PORT ,port);

  app.listen(port)
