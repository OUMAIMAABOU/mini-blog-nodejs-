const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const article = sequelize.define("articles", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
  
        },
        url: {
          type:Sequelize.STRING,
        },
        title: {
          type:Sequelize.STRING,
        },
        contenu: {
          type:Sequelize.STRING,
        }
  });

  // article.associate= models=>{
  //   article.hasMany(models.commentaire, {
  //     onDelete : "cascade"
  //   })
  // }
  return article;
};



   
