const express = require("express");
const app = express();
// const conn = require('../db.config.js')
const db = require("./app/models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(express.static('public'))

app.set('view engine','ejs')
// app.use(express.static(__dirname + '/views'));
app.set('views','./views/dashboard')
// app.set('views','./views/homePage')
var path = require ('path');
const { avis } = require("./app/models");
app.use(express.static(path.join(__dirname + '/views')));

    
    const {findAll, update , create} = require('./app/controllers/avis.controller.js')
    app.get('/avisComme', async(req, res) => {
      let avis = await findAll()
      res.render('avisComme', {avis})
    })
    // app.get('/edit/:id', async(req, res) => {
    //   let avis = await update(id)
    //   res.render('edit', {avis,id})
    // })
// const { findAll } = require("./app/controllers/avis.controller.js");
// app.get('/aviscomme', async(req, res) => {
//   // let avis = await findAll()

//   res.render('avisComme', {
//     avis,
//     name : 'ffffffffffffffffff'
//   })
// })

// app.get("/aviscomme", async(req, res) => {
//   // let avis =  findAll()
//   var tagline = "No programming concept is complete without a cute animal mascot.";
  
//   res.render('avisComme',{
//   //  avis: avis,
//     tagline: tagline
//   });
// });

// app.get("/createAvis", async(req,res)=>{
//   let a = 'create some avis'
//  res.render("")
// })


app.get("/aviscomme", async(req, res) => {
  
  res.render('avisComme',{data:data});
});
app.get("/dash", (req, res) => {
  res.render('dashboard');
});
app.get("/", (req, res) => {
  res.render('homePage');
});

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
// app.get("/blog", (req, res) => {
//   res.render('blog_details');
// });
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
app.get('/articles/artu', async(req, res) => {
  res.render('articles')
})
// Categories
app.get('/categories', async(req, res) => {
  res.render('categories')
})
require("./app/routes/routes")(app);
const port = process.env.PORT || 8080
console.log('The value of PORT is:', process.env.PORT ,port);

app.listen(port)

