const express = require('express');
const app = express();
var path = require("path");

app.use("/", express.static(path.join(__dirname, "/../ClientApp/dist")));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/../ClientApp/dist/index.html"))
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
