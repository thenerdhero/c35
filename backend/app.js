var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//Set up to render the html correctly from the views folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/views');
app.use(express.static(__dirname.replace('backend', 'frontend')));

//Set up to use all the routes from router.js
var router = require('./router');
app.use('/', router);

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});
