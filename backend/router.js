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

  router.post('/addTrain', function(req,res){
    database.executeQuery("INSERT INTO trains (name,inService,numberOfAvailable) VALUES ('" + req.body.nameOfTrain +
      "'," + req.body.inService  +
      "," + req.body.availableTrains + ")");
    return res.send("success");
  });

  router.get('/getTrains', function(req,res){
    database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
    });
  });

  router.get('/trainList', function(req,res){
    return res.render('trainList.html');
  });

  return router
}();