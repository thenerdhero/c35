var router = require('express').Router();
 
module.exports = function(){

  router.get('/helloworld', function(req,res){
    return res.render('index.html');
  });

  router.post('/tableOfResults', function(req,res){
    return res.render('tableOfResults.html');
  });

  return router
};