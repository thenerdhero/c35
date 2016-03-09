'use strict';

/*

 Here is where you will configure the routes of your application.
 This how you can make urls that will render your views pages you put in the views folder.

 This is also known as making a GET request
 An example of this looks like:
  router.get('string with your route', function(req,res){
    return res.render('path to your views in the views folder')
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
var _ = require('lodash');
var fs = require('fs');

module.exports = function(){

  _.each(fs.readdirSync('backend/routers'), function (file){
    var routerFromFile = require("./routers/" + file);
    router.stack = _.concat(router.stack, routerFromFile.stack);
  });

  return router;
}();