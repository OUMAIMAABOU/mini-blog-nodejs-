module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define("article", {
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
         article: {
           type:Sequelize.TEXT,
           allowNull: false
         }
    });
  
    return article;
  };



   
