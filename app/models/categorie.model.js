module.exports = (sequelize,Sequelize) => {
    const categorie = sequelize.define("categorie", {
            name: {
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

