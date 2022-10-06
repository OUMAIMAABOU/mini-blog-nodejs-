const { avis } = require('../models');
const db = require('../models');
const Avis = db.avis;
const Op = db.Sequelize.Op;

// Create and Save a new avis
exports.create = (req, res) => {
    // create Avis
    const avis = {
        name: req.body.name,
        email: req.body.email,
        avie: req.body.avie
    };

    // save avis in data base
    Avis.create(avis)
        .then(data => { res.send(data) })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Avis."
            })
        })

};

exports.show = (req, res) => {
    console.log('hi admiral')
};

exports.findAll = () => {
    // const name = req.query.name;
    // let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    // avis.findAll({ where: condition })
    //     .then(data => { res.send(data) })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message
    //         })
    //     })
        // console.log(name)
       return avis.findAll()
};

exports.findOne = () => {
    const id = req.params.id;

    avis.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find avis with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving avis with id=" + id
            });
        });
    
};

exports.update = (req, res) => {
    const id = req.params.id;

    avis.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "avis was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update avis with id=${id}. Maybe avis was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating avis with id=" + id
            });
        });
    
};

exports.delete = (req, res) => {
    const id = req.params.id;

    avis.destroy({
        where : {id : id}
    })
    .then(num => {
        if(num == 1){
            res.redirect('/aviscoome')
        }else{
            res.send({
                message : `Cannot delete Avis with id=${id}. Maybe Avis was not found!`
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message : "Could not delete Avis with id=" + id
        });
    });
};



exports.test = (req,res)=>{
    const id = req.params.id
    res.send(id)
    console.log(id)
}