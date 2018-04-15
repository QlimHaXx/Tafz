const express = require('express');
const app = express();
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var MongoObjectID = require("mongodb").ObjectID;

MongoClient.connect("mongodb://localhost", function(error, client) {
    if (error) return funcCallback(error);

    var db = client.db('tafz');

    console.log("Connecté à la base de données 'tafz'");

    //var objNew = { name: "GLaDOS", game: "Portal" };

    //db.collection("personnages").insert(objNew, null, function (error, results) {
    //    if (error) throw error;
    //    console.log("Le document a bien été inséré");
    //});

    //var idToFind = "5ad3735050eda61fa98ecb20";
    //var objToFind = { _id: new MongoObjectID(idToFind) };

    db.collection("personnages").find().toArray(function (error, results) {
        if (error) throw error;

        results.forEach(function(obj) {
            console.log(
                "ID : "  + obj._id.toString() + "\n"+ // 53dfe7bbfd06f94c156ee96e
                "Nom : " + obj.name + "\n"  +         // Adrian Shephard
                "Jeu : " + obj.game                  // Half-Life: Opposing Force
            );
        });
    });

    /*db.collection("personnages").remove({ _id: new MongoObjectID("5ad37e35975190355862d67d")}, null, function(error, result) {
        if (error) throw error;
        console.log("yo");
    });*/
});

app.use("/", express.static(path.join(__dirname, "/../ClientApp/dist")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/../ClientApp/dist/index.html"))
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
