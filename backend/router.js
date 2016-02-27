'use strict';

/*

 Here is where you will configure the routes of your application.
 This how you can make urls that will render your html pages you put in the html folder.

 This is also known as making a GET request
 An example of this looks like:
  router.get('string with your route', function(req,res){
    return res.render('path to your html in the html folder')
  });

 You can also setup POST request for something that will send something to a database.
  router.post('string with your route', function(req,res){
    executeDBFunction();
    //you can then send a response with res.send();
    return res.send("success");
  });

*/

var router = require('express').Router();
var database = require('./database.js');

module.exports = function(){

  router.get('/helloworld', function(req,res){
    return res.render('helloworld.html');
  });

  router.post('/addValue', function(req,res){
    database.executeQuery("INSERT INTO example (val) VALUES ('" + req.body.value + "')");
    return res.send("success");
  });

  router.get('/resultsInDatabase', function(req,res){
    database.executeQuery("SELECT * FROM example", function(results) {
      res.send(results);
    });
  });

  return router
}();