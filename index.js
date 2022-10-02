const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views','./app/views')
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render('home');
});


const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("create db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });


  require("./app/routes/routes")(app);
  const port=process.env.port||8080
  app.listen(port,()=>{
    console.log(`sever running on http://localhost:${port}`)
  })

