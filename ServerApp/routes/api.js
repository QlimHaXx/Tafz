const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost', function (error, client) {
        if (error) return funcCallback(error);

        let db = client.db('tafz');

        console.log("Connecté à la base de données 'tafz'");

        closure(db);
    });
};
// error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err === 'object' ? err.message : err;
//     res.status(501).json(response);
// };
// Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };
// Get
router.get('/perso', (req, res) => {
   connection((db) => {
       db.collection('personnages')
           .find()
           .toArray()
           .then((persos) => {
               //response.data = persos;
               res.json(persos);
           })
           .catch((err) => {
               //sendError(err, res);
           });
   });
});

module.exports = router;