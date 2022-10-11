const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.commentaire = require("./commentaire.model.js")(sequelize, Sequelize);
db.categorie = require("./categorie.model.js")(sequelize, Sequelize);
db.article = require("./article.model.js")(sequelize, Sequelize);
// db.avis = require('./avis.model.js')(sequelize, Sequelize)
db.art = require('./art.model.js')(sequelize, Sequelize)

module.exports = db;
