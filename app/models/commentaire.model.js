article = require('./article.model')
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
  //   article.hasMany(commentaire);
  // commentaire.belongsTo(article);
    return commentaire;
  };
 


   
