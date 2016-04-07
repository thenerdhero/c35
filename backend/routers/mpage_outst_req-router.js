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


var router1 = require('express').Router();
var database = require('../db');



module.exports = function() {
    
    router1.get('/getmpage_outst_req', function(req,res){
  console.log('app / mpage_outst_req requested');
   database.executeQuery(`SELECT Trng_Reqst_Nbr, name, Trng_Cors_Strt_Dt,
  Trng_Cors_End_Dt, Trng_Cors_Cost, Trng_Reqst_Immed_Supv_Apvl_Flg, Trng_Reqst_Dept_Hd_Apvl_Flg 
  FROM TTX_Empl_Trng_Reqst rn, TTX_Empl_Name nm
  WHERE rn.cntct_email_addr = nm.cntct_email_addr
  AND Trng_Reqst_Dept_Hd_Apvl_Flg = 'P'
  ;`, function(results) {
      res.send(results);
  });
});
    
    
    

  router1.get('/mpage_outst_req', function(req,res){
    return res.render('mpage_outst_req.html');
  });
  
  router1.get('/', function(req,res){
    return res.render('apfirstpage1.html');
  });


  return router1
}();