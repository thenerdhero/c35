$(document).ready(function(){
    
    
    //getStub('/getmpage_outst_req', function(results){ 
    $.get('/getmpage_outst_req', function(results){ 

    var tableString = `
<div class="row top"><div class="col-xs-3 col-sm-3 col-md-3"><p>Request #<br>Employee Name</p></div>
<div class= "col-xs-4 col-sm-4 col-md-4"><p>Start/End Date</p></div>
<div class= "col-xs-3 col-sm-3 col-md-3"><p>Cost</p></div>
<div class="col-xs-1 col-sm-1 col-md-1"><p>SV<br>Appv</p></div>
<div class="col-xs-1 col-sm-1 col-md-1"><p>DH<br>Appv</p></div></div>
  `;
  
  console.log (results);
  
  var rowNumber = 0;
  

$.each(results, function(index, rowObject){
    
    rowNumber++;
    if (rowNumber % 2 != 0) {
         tableString+=`<div class="row row-odd">`;
    } else {
        tableString+=`<div class="row row-even">`;
    }

console.log(JSON.stringify(rowObject));



var startDate = rowObject.trng_cors_strt_dt;
startDate = startDate.substring(0, 10);

var endDate =rowObject.trng_cors_end_dt;
endDate = endDate.substring(0, 10);


      tableString+=`
      

  <div class= "col-xs-3 col-sm-3 col-md-3"><a href = "aprovereject"> <p> ${rowObject.trng_reqst_nbr} </p></a> <p>${rowObject.name} </p> </div>

  <div class= "col-xs-4 col-sm-4 col-md-4"> <p> ${startDate} </p> <p> ${ endDate}</p> </div>
  <div class= "col-xs-3 col-sm-3 col-md-3"><p> ${rowObject.trng_cors_cost} </p></div>

   <div class="col-xs-1 col-sm-1 col-md-1"> <p> ${rowObject.trng_reqst_immed_supv_apvl_flg}</p> </div>
   
 <div class="col-xs-1 col-sm-1 col-md-1"> <p> ${ rowObject.trng_reqst_dept_hd_apvl_flg} </p> </div></div> `

});

     $('#outst_req-data').html(tableString);
     
});
});

/*
 function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getmpage_outst_req"){
    stubbedJson = [
{"id":1,"trng_reqst_nbr":20140015, "cntct_email_addr":"ALAN TANG@TTX.COM", "trng_cors_strt_dt":"2014/05/05",
      "trng_cors_end_dt":"2014/05/08",  "trng_cors_cost":"1795.00","trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y"},
{"id":2,"trng_reqst_nbr":20150044, "cntct_email_addr":"ORLINE CACAYAN@TTX.COM", "trng_cors_strt_dt":"2015-09-28",
      "trng_cors_end_dt":"2015/10/01", "trng_cors_cost":"1895.00","trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P"},
{"id":3, "trng_reqst_nbr":20150053, "cntct_email_addr":"ALAN TANG@TTX.COM", "trng_cors_strt_dt":"2015/09/28",
      "trng_cors_end_dt":"2015/10/01", "trng_cors_cost":"1895.00", "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P"},
{"id":4,  "trng_reqst_nbr":20160009,"cntct_email_addr":"KENDALL ZETTLMEIER@TTX.COM", "trng_cors_strt_dt":"2016/04/16",
      "trng_cors_end_dt":"2016/04/22", "trng_cors_cost":"1895.00",  "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y"}];
  }
  callback(stubbedJson);  
} 

*/









