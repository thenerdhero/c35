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

router3.post('/addRequest', function(req,res){
  console.log('posted to /nrp' + req.body.Trng_Cors_Nm);
  var sql = `
   INSERT INTO TTX_Empl_Trng_Reqst
   
   (Trng_Cors_Nm, trng_reqst_nbr, cntct_email_addr,
   cntct_email_immed_supv_addr, cntct_email_dept_hd_addr,
   Trng_Cors_Id, trng_cors_nbr, Trng_Cors_Strt_Dt, 
   Trng_Cors_End_Dt,Trng_Cors_Totl_Nbr_Hrs, Trng_Cors_Cost,
   Trng_Cors_Locn, Trng_Reqst_Cors_Bnft_Txt, Vndr_Nm, lst_updt_id, 
   Trng_Reqst_Immed_Supv_Apvl_Flg, 	Trng_Reqst_Dept_Hd_Apvl_Flg, Trng_Reqst_VP_Apvl_Flg,
   	Trng_Cors_Compl_Flg, Trng_Cors_Rltd_Exp_Amt)
   
   VALUES ('${req.body.Trng_Cors_Nm}', '12233', 'ikorchynska@icstrars.org', 
   'iryna.korchynska@gmail.com', 'ik2202014@gmail.com',
   '${req.body.Trng_Cors_Id}', '4455', '${req.body.Trng_Cors_Strt_Dt}', 
   '${req.body.Trng_Cors_End_Dt}', '${req.body.Trng_Cors_Totl_Nbr_Hrs}', '${req.body.Trng_Cors_Cost}',
   '${req.body.Trng_Cors_Locn}', '${req.body.Trng_Reqst_Cors_Bnft_Txt}', '${req.body.Vndr_Nm}', '344', 
   'P', 'P', 'P', ' ', '${req.body.Trng_Cors_Rltd_Exp_Amt}');
  `;
   database.executeQuery(sql, function(res){
       console.log(res);
   });
   console.log(sql);


  
  return res.send("success");
});


  return router3
}();