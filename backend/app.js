var express = require('express');
//var database = require('./db');

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



//Set up to use all the routes from router.js
var router = require('./routers/etr2-router');
var router1 = require('./routers/mpage_outst_req-router');
var router2 = require('./routers/manage2_all_requests-router');
var router3 = require('./routers/nrp-router');

var router4 = require('./routers/aprovereject-router');


app.use('/', router);
app.use('/', router1);
app.use('/', router2);
app.use('/', router3);
app.use('/', router4);

app.listen(port, function(){
 console.log("Application is running:");
 console.log("Listening on " + port);
});
