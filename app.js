const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const ejs = require('ejs');
const app = express();


app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, ()=>{
  console.log('Server listening on 3000 port');
});

const apiPhotos = require('./controllers/apiPhotos');

app.use('/api', apiPhotos);



const dbConn = mongoose.createConnection('localhost:27017/kacin');
require('./models/photos');

app.db = {
  photos : dbConn.model('photos')
};

module.exports.app = app;
module.exports.db = app.db;
