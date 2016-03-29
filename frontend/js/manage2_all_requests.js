$(document).ready(function(){
 
    //getStub('/getmanage2_all_requests', function(results){ 
     $.get('/getetr2', function(results){ 
     
 var tableString = `
     <div class="row top">
  <div class="col-xs-3 col-sm-4 col-md-4"><p>Request #<br>Employee Name</p></div>
  <div class= "col-xs-3 col-sm-3 col-md-3"><p>Course Name</p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>SV Appv</p></div>
   <div class="col-xs-1 col-sm-1 col-md-1"><p>DH Appv</p></div>
    <div class="col-xs-1 col-sm-1 col-md-1"><p>VP Appv</p></div>
  <div class="col-xs-3 col-sm-2 col-md-2"><p>Cost</p></div>
  </div>
  
  `;
  
   console.log (results);

  var myRowN = 0;

$.each(results, function(index, rowObject){
    
    myRowN++;
    if (myRowN % 2 != 0) {
         tableString+=`<div class="row row-odd">`;
    } else {
        tableString+=`<div class="row row-even">`;
    }
      
      tableString +=`
      
     <div class="col-xs-3 col-sm-4 col-md-4"> <a href = "aprovereject.html"><p> ${rowObject.trng_reqst_nbr} </p></a> <p>${rowObject.cntct_name} </p> </div>
  <div class= "col-xs-3 col-sm-3 col-md-3"> <p>${rowObject.trng_cors_nm}</p> </div>
  <div class="col-xs-1 col-sm-1 col-md-1"> <p>${rowObject.trng_reqst_immed_supv_apvl_flg} </p> </div>
   <div class="col-xs-1 col-sm-1 col-md-1"> <p> ${ rowObject.trng_reqst_dept_hd_apvl_flg} </p> </div>
    <div class="col-xs-1 col-sm-1 col-md-1"> <p>${rowObject.trng_reqst_vp_apvl_flg}</p> </div>
  <div class="col-xs-3 col-sm-2 col-md-2"> <p>${rowObject.trng_cors_cost}</p> </div> </div>  `
        
        
    });

  
  
   $('#manage-all-data').html(tableString);
});
});





function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getmanage2_all_requests"){
    stubbedJson = [
{"id":1,
"trng_reqst_nbr":20140015,
"trng_cors_nm":"Visual Studio Live",
 "cntct_name":"ALAN TANG",
      
     "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
        "trng_cors_cost":"1795.00"},
      
{"id":2,
"trng_reqst_nbr":20150044, 
"trng_cors_nm":"Visual Studio Live! 2015",
 "cntct_name":"ORLINE CACAYAN",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P", 
        "trng_cors_cost":"1895.00"},
      
{"id":3, "trng_reqst_nbr":20150053, 
"trng_cors_nm":"Visual Studio Live", 
"cntct_name":"ALAN TANG",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_cost":"1795.00"},
      
{"id":4, 
"trng_reqst_nbr":20160009,
"trng_cors_nm":"AppDynamics In Action for Power Users - .NET",
"cntct_name":"ALAN TANG",
      "trng_reqst_immed_supv_apvl_flg":"P",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_cost":"0.00"}];
  }
  callback(stubbedJson);  
} 

