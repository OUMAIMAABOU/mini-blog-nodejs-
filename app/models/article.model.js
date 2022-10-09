const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const article = sequelize.define("articles", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
  
        },
        article_url: {
          type:Sequelize.STRING,
        },
        article_title: {
          type:Sequelize.STRING,
        },
        article_contenu: {
          type:Sequelize.STRING,
        }
  });

  // article.associate= models=>{
  //   article.hasOne(models.avis, {
  //     onDelete : "cascade"
  //   })
  // }
  return article;
};



   
