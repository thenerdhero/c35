var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/icstars';

var client = pg.connect(connectionString, function(){});

app.get('/', function(req,res){
  return res.render('index.html');
});

app.listen(1337, function(){
 console.log("App is listening on 1337"); 
});
