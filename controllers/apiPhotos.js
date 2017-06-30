const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const app = require('../app');
const PhotosSchema = require('../models/photos');


router.get('/photos', (req, res)=>{

  res.render('photo');
});

router.post('/photos',multer({ dest: '../uploads/'}).single('photo'), (req, res)=>{
  let photo = new app.db.photos();
  photo.data = fs.readFileSync(req.file.path);
  photo.contentType = req.file.mimetype;
  photo.save();
  res.render('photo');
});

router.get('/photos/:id',(req,res)=>{

  app.db.photos.findById(req.params.id,(err,doc)=>{

    if(err){
      console.log("erroooooooorrrrrrr");
    }
    var base = new Buffer(doc.data).toString('base64');
        res.render('index', { title: 'Express', img: base, type:doc.contentType});


  });
});


module.exports = router;
