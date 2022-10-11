const { categorie } = require("../models");
const db = require("../models");
const Categorie = db.categorie;
const Op = db.Sequelize.Op;

    exports.create = (req, res) => {
        const categories = {
           
            name: req.body.name,
            
         
          };
              Categorie.create(categories)
            .then(
              res.redirect('/categories')
            )
            .catch(err => {
              res.status(500).send({
                message:
                  err.message 
              });
            });
    };

    exports.findAllCategoriesdash = (req, res  ) => {
        categorie.findAll({ order: [
          ['id', 'DESC']
      ],})
        .then(data => {
            res.render('categories',{'categories':data, 'is_linked':'categories'})
          })
      .catch(err => {
            console.log(err )  
      });
      }

      exports.findAllCategorieshome = (req, res  ) => {
        categorie.findAll({ order: [
          ['id', 'DESC']
      ],})
        .then(data => {
            res.render('homePage',{'categories':data})
          })
      .catch(err => {
            console.log(err )  
      });
      }

    exports.findOnecategorie = (req, res) => {
        const id = req.params.id;
    
        categorie.findByPk(id)
        .then(data => {
            if (data) {
                res.render('categorie_update', {'categorie': data});
            } else {
            res.status(404).send({
                message: `Cannot find Tutorial with id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
            });
        });
    };


   




    exports.test_id = (req,res) =>{
        const id = req.params.id;
        res.redirct("/")
        console.log(id)
    }

    // exports.update = (req, res) => {
    //     const id =req.body.id;
    
    //     categorie.update(req.body, {
    //     where: { id: id }
    //     })
    //     .then(num => {
    //         if (num == 1) {
    //             res.redirect('/table_categorie');
    //         } else {
    //         res.send({
    //             message: `Cannot update categorie with id=${id}. Maybe categorie was not found or req.body is empty!`
    //         });
    //         }
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //         message: "Error updating categorie with id=" + id
    //         });
    //     });
    // };

    exports.updatecategorie = (req, res) => {
        const categories = {
          
          name: req.body.name,
         
        };
      
        categorie.update(categories, {
          where: { id : req.body.id }
        })
          .then(num => {
            if (num == 1) {
              res.redirect('/categories')
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating " + id
            });
          });
      };

      
    exports.delete = (req, res) => {
        categorie.destroy({
          where: { id: req.params.id }
        })
          .then(num => {
            if (num == 1) {
              res.redirect('/categories');
            } else {
              res.send({
                message: `not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: " id=" + id +"not existe"
            });
          });
      };