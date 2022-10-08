const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

const db = require("./app/models");
const store = require("store2");
store('Profile', {linked_page: ''});
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
app.get('/dash', (req, res) => {
  res.render('dashboard',{'is_linked':'dashboard'})
})
// Settings

app.get('/settings', (req, res) => {
  res.render('settings',{'is_linked':'settings'})
})
// Articles

// Categories
require("./app/routes/routes")(app);
const port = process.env.PORT || 8080
console.log('The value of PORT is:', process.env.PORT ,port);

app.listen(port)

