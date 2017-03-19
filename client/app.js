$(document).ready(function(){
document.getElementById("test").innerHTML = "My first paragraph.";  
console.log('In client app');
  var submit=document.getElementById('submit');
  var fileload=document.getElementById('fileload');
  var result=document.getElementById('result');

  submit.addEventListener('click',function(){
document.getElementById("test").innerHTML = "Clict";
    console.log('goint go upload, file length:',fileload.files.length);
    if(fileload.files.length>0) uploadFile(fileload.files[0]);
  });

function  uploadFile(file){
document.getElementById("test").innerHTML = "Upload";
    var http=new XMLHttpRequest();
    var formData=new FormData();
    var url='upload';   //endpoint address

   formData.append('data',file);   
   http.open('POST',url,true);
   http.send(formData);
   http.onload=function(){
document.getElementById("test").innerHTML = "get size";
result.innerHTML=this.responseText;};
  }
});
