const { article } = require(".");

module.exports = (sequelize, Sequelize) => {
    const commentaire = sequelize.define("commentaire", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
   
          },
          email: {
            type:Sequelize.STRING,
            allowNull: false
          },
          nom: {
           type:Sequelize.STRING,
           allowNull: false
         },
         commentaire: {
           type:Sequelize.TEXT,
           allowNull: false
         }
    });
  
    return commentaire;
  };
  //  article.hasMany(commentaire);
  // commentaire.belongsTo(article);


   
