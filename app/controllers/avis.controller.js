const { avis } = require('../models');
const db = require('../models');
const Avis = db.avis;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
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

exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? {name : {[Op.like] : `%${name}%`}} : null;

    avis.findAll({where : condition})
    .then( data => {res.send(data)})
    .catch(err => {
        res.status(500).send({
            message : 
            err.message || "some error occurred while retrieving avis"
        })
    })
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};