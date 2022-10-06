const express = require("express");
const dashboard = express();
dashboard.use(express.json());
const homePage = express();
homePage.use(express.json());
dashboard.use(express.urlencoded({ extended: true }));
require('dotenv').config();
dashboard.use(express.static('public'))
homePage.use(express.static(__dirname + '/views/homePage'));
const { findAllcommentaire,findOnecommentaire}   = require('./app/controllers/commentaire.controller.js')

const db = require("./app/models");


db.sequelize.sync()
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("db not connected " + err.message);
  });

dashboard.set('views','./views/dashboard')
dashboard.set('view engine','ejs')
homePage.set('views','./views/homePage')
homePage.set('view engine','ejs')



// ________________________ homePage ______________________

homePage.get("/", (req, res) => {
  res.render('homePage');
});
homePage.get("/blog", (req, res) => {
  res.render('blog_details');
});
// ________________________ dashboard ______________________
// Dashboard
dashboard.get("/", (req, res) => {
  res.render('dashboard');
});
dashboard.get('/dash', (req, res) => {
  res.render('dashboard')
})
dashboard.get('/settings', (req, res) => {
  res.render('settings')
})
// Articles
dashboard.get('/articles', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('articles', {commantaire})
})
// Categories
dashboard.get('/categories', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('categories', {commantaire})
})
// Comments
dashboard.get('/comments', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('avisComme', {commantaire})
})
dashboard.get('/commantaire/edite/:id', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('updatecomment', {commantaire})
})







require("./app/routes/routes")(homePage);
const port = process.env.PORT || 8080
console.log('The value of PORT is:', process.env.PORT ,port);

dashboard.listen(port)
homePage.listen(3040)

