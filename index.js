const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.set('views','./views')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

const db = require("./app/models");


db.sequelize.sync({alter: true})
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("db not connected " + err.message);
  });

app.set('views','./views')
app.set('view engine','ejs')


// ________________________ homePage ______________________

app.get("/blog", (req, res) => {
  res.render('blog_details');
});
// ________________________ dashboard ______________________
// Dashboard

app.get('/dash', (req, res) => {
  res.render('dashboard')
})
app.get('/settings', (req, res) => {
  res.render('settings')
})
// Articles
app.get('/articles/artu', async(req, res) => {
  res.render('articles')
})


// Categories

// 
//------------ view table categorie dashboard 

//------------ view table categorie dashboard 

//---------- view categorie page home
// app.get('/', async(req, res) => {
//   let categorie = await findAll()
//   res.render('homePage', {categorie})
// })
//---------- view categorie page home

require("./app/routes/routes")(app);
const port = process.env.PORT || 8080
console.log('The value of PORT is:', process.env.PORT ,port);

app.listen(port)

