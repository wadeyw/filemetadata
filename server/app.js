var express=require('express');
var multer=require('multer');

export const app=express();

var storage=multer.memoryStorage();
var upload=multer({storage:storage});
console.log('Server app');

app.use('/',express.static('client')); //set a static asset, asset path client is relative to the entry file
console.log('Using static client');
app.post('/upload',upload.single('data'),(req,res)=>{
  console.log('Post file');
  if(req.file){
    console.log(req.file);
    res.status(200).json({
      filename:req.file.originalname,
      size:req.file.size,
      type:req.file.mimetype
    });
  }else{
    res.status(500).json({error:"No file upload"});
  }
});
