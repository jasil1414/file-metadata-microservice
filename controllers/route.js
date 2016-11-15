var express = require('express');
var multer = require('multer');
var router = express.Router();

var storage = multer.memoryStorage();// set storage location to buffer
var upload = multer({storage:storage});//upload to the set storage location

//get index page
router.get('/', function(req,res){
  res.render('index');
});

//get the uploaded file and respond with json object
router.post('/filesize',upload.single('uploadFile'),function(req,res){

  var metadataObject = {
    'size':req.file.size +' bytes',
    'fileName' : req.file.originalname,
    'encodingType' : req.file.encoding,
    'mimeType':req.file.mimetype
  }
  res.json(metadataObject);
})

module.exports= router;
