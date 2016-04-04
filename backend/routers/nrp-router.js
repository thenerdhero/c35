'use strict'

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


var router3 = require('express').Router();
var database = require('../db');

module.exports = function() {
    
    /* router2.get('/getetr2', function(req,res){
  console.log('app / getetr2');
  database.executeQuery(`SELECT Trng_Reqst_Nbr, Cntct_Email_Addr,
  Trng_Cors_Nm,Trng_Reqst_Immed_Supv_Apvl_Flg, Trng_Reqst_Dept_Hd_Apvl_Flg, 
  Trng_Reqst_VP_Apvl_Flg, Trng_Cors_Cost FROM TTX_Empl_Trng_Reqst FROM TTX_Empl_Trng_Reqst`, function(results) {
      res.send(results);
  });
}); */

  router3.get('/nrp', function(req,res){
    return res.render('nrp.html');
  });
  
  router3.get('/', function(req,res){
    return res.render('apfirstpage1.html');
  });
/*  
router3.post('/nrp', function(req,res){
  console.log('posted to /nrp');
  return res.send("success");
});*/


  return router3
}();