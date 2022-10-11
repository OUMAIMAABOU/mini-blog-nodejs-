module.exports = (sequelize, Sequelize) => {
     const commentaire = sequelize.define("commentaires", {
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
         } , 
         avis: {
          type:Sequelize.TEXT,
          allowNull: true
        } ,        
    });

  //  commentaire.associate= models=>{
  //       commentaire.belongsTo(models.article, {
  //         onDelete : "cascade"
  //       })
  //     }

    return commentaire;
  };
  





   
