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


var router2 = require('express').Router();
var database = require('../db');

module.exports = function() {
    
     router2.get('/getmanage2_all_requests', function(req,res){
  console.log('app / getetr2');
  database.executeQuery(` SELECT Trng_Reqst_Nbr, name, Trng_Cors_Nm, Trng_Reqst_Immed_Supv_Apvl_Flg, Trng_Reqst_Dept_Hd_Apvl_Flg, 
  Trng_Reqst_VP_Apvl_Flg, Trng_Cors_Cost
  FROM TTX_Empl_Trng_Reqst rn, TTX_Empl_Name nm
  WHERE rn.cntct_email_addr = nm.cntct_email_addr;`, function(results) {
      res.send(results);
  });
});

  router2.get('/manage2_all_requests', function(req,res){
    return res.render('manage2_all_requests.html');
  });
  
  router2.get('/', function(req,res){
    return res.render('apfirstpage1.html');
  });


  return router2
}();