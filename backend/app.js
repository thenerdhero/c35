var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//Set up to render the views correctly from the views folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/mpage_outst_req', function(req,res){
  console.log('app / mpage_outst_req requested');
  return res.render('mpage_outst_req.html');
});

app.get('/etr2', function(req,res){
  console.log('app / etr2 requested');
  return res.render('etr2.html');
});

app.get('/manage2_all_requests', function(req,res){
  console.log('app / manage2_all_requests requested');
  return res.render('manage2_all_requests.html');
});