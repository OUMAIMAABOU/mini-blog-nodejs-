// const { sequelize } = require(".");
// const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const avis = sequelize.define('avis', {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false
        },
        avie : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })

    return avis;
}