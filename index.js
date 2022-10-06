const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));
const { findAllcommentaire}   = require('./app/controllers/commentaire.controller.js')

const db = require("./app/models");


db.sequelize.sync()
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("db not connected " + err.message);
  });

app.set('views','./views')
app.set('view engine','ejs')



// ________________________ homePage ______________________

app.get("/", (req, res) => {
  res.render('homePage');
});
app.get("/blog", (req, res) => {
  res.render('blog_details');
});
// ________________________ dashboard ______________________
// Dashboard
app.get("/", (req, res) => {
  res.render('dashboard');
});
app.get('/dash', (req, res) => {
  res.render('dashboard')
})
app.get('/settings', (req, res) => {
  res.render('settings')
})
// Articles
app.get('/articles', async(req, res) => {
  res.render('articles')
})
// Categories
app.get('/categories', async(req, res) => {
  res.render('categories')
})
// Comments
app.get('/comments', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('avisComme', {commantaire})
})
app.get('/commantaire/edite/:id', async(req, res) => {
  let commantaire = await findAllcommentaire()
  res.render('updatecomment', {commantaire})
})







require("./app/routes/routes")(app);
const port = process.env.PORT || 8080
console.log('The value of PORT is:', process.env.PORT ,port);

app.listen(port)

