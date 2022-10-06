const express = require("express");
const app = express();
app.use(express.json());
const app2 = express();
app2.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.static('public'))
app2.use(express.static(__dirname + '/views/homePage'));
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
app2.set('views','./views/homePage')
app2.set('view engine','ejs')


app.get("/dash", (req, res) => {
  res.render('dashboard');
});

app2.get("/", (req, res) => {
  res.render('homePage');
});
app2.get("/blog", (req, res) => {
  res.render('blog_details');
});
require("./app/routes/routes")(app);
  const port=process.env.PORT || 8080
  console.log('The value of PORT is:', process.env.PORT ,port);

  app.listen(port)
  app2.listen(3040)

