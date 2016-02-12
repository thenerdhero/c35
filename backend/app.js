var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use( bodyParser.urlencoded({ extended: true }) ); 

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/views');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  return res.render('index.html');
});

app.post('/tableOfResults', function(req,res){
  console.log(req.body)
  return res.render('tableOfResults.html');
});

app.listen(port, function(){
 console.log("App is listening on " + port); 
});
