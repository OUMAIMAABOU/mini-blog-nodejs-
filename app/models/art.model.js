module.exports = (sequelize, Sequelize) => {
    const art = sequelize.define("art", {
         
        
          name_art: {
            type:Sequelize.STRING,
          },
          title_art: {
            type:Sequelize.STRING,
          },
          id_art: {
            type: Sequelize.INTEGER,
            
          },

    });
    return art;
  };