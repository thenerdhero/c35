var router = require('express').Router();
/*
 Here is where you will configure the routes of your application.
 This how you can make urls that will render your html pages you put in the views folder.
 To do this you need to add:
  router.get('string with your route', function(req,res){
    return res.render('path to your html in the views folder')
  });

 */
module.exports = function(){

  router.get('/helloworld', function(req,res){
    return res.render('helloworld.html');
  });

  return router
};