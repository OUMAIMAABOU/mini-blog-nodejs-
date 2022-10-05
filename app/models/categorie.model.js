module.exports = (sequelize,Sequelize) => {
    const categorie = sequelize.define("categorie", {
            name: {
            type:Sequelize.STRING,
            allowNull: false
            },
            id_article: {
                type:Sequelize.STRING,
                allowNull: false
                },
        });
    return categorie;
};

