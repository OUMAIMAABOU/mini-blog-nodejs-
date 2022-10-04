const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();

app.set('views','./views/homePage')
app.set('view engine','ejs')
app.use(express.static(__dirname + '/views/homePage'));

app.get("/", (req, res) => {
  res.render('homePage')
});

app.get("/articles" ,(req, res) => {
  res.redirect('/')
})

app.get("/articles/:article_id" ,(req, res) => {
  res.send(req.params.article_id);
})




const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("db connected.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });


  require("./app/routes/routes")(app);
  const port=process.env.PORT || 8080
  console.log('The value of PORT is:', process.env.PORT ,port);

  app.listen(port)