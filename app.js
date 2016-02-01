var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
  return res.render('index.html');
});

app.listen(1337, function(){
 console.log("App is listening on 1337"); 
});
