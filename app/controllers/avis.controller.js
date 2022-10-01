const db = require('../models');
const avis = db.avis;
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
    avis.create(avis)
        .then(data => { res.send(data) })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Avis."
            })
        })
};