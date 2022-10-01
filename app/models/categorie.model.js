module.exports = (sequelize,Sequelize) => {
    const categorie = sequelize.define("categorie", {
        categories: {
            type:Sequelize.STRING,
            allowNull: false
          },
          update: {
           type:Sequelize.STRING,
           allowNull: false
         },
         delete: {
           type:Sequelize.TEXT,
           allowNull: false
         }
    });
    return categorie;
};

