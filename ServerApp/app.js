const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
// API file for MongoDB
const api = require('./routes/api');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Angular Dist
app.use(express.static(path.join(__dirname, 'dist')));
// Api location
app.use('/api', api);
// Dist location
app.use("/", express.static(path.join(__dirname, "../ClientApp/dist")));
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../ClientApp/dist/index.html'));
});
// Set port
const port = process.env.PORT || '3000';
app.set('port', port);
// Run server
app.listen(port, () => console.log('Running on localhost:'+port));
