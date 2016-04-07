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


var router = require('express').Router();
var database = require('../db');

module.exports = function() {
router.get('/getetr2', function(req,res){
  console.log('app / etr2 requested');
  database.executeQuery(`SELECT Trng_Reqst_Nbr, Trng_Cors_Nm, Trng_Cors_Strt_Dt,
  Trng_Cors_End_Dt, Trng_Reqst_Immed_Supv_Apvl_Flg, Trng_Reqst_Dept_Hd_Apvl_Flg, 
  Trng_Reqst_VP_Apvl_Flg, Trng_Cors_Compl_Flg FROM TTX_Empl_Trng_Reqst
  where cntct_email_addr = 'ALAN_TANG@TTX.COM';`,
  function(results) {
      res.send(results);
  });
});


//where cntct_email_addr = 'ALAN_TANG@TTX.COM'

  router.get('/etr2', function(req,res){
    return res.render('etr2.html');
  });
  
  router.get('/', function(req,res){
    return res.render('apfirstpage1.html');
  });

  return router
}();


