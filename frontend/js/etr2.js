$(document).ready(function(){
    
      // getStub('/getetr2', function(results){ 
       $.get('/getetr2', function(results){ 

    
    var tableString = `
    
     <div class="row top">
  <div class="col-xs-3 col-sm-3 col-md-3"><p>Edit Request</p></div>
  <div class= "col-xs-3 col-sm-2 col-md-2"><p>Course Name</p></div>
  <div class="hidden-xs col-sm-3 col-md-3"><p>Start/End Date</p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>SV Appv</p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>DH Appv</p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>VP Appv</p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>Mark</p></div>
  </div>
    
    `;
    
    console.log (results);
    
     var myRows = 0;

$.each(results, function(index, rowObject){
    
    myRows++;
    if (myRows % 2 != 0) {
         tableString+=`<div class="row row-odd">`;
    } else {
        tableString+=`<div class="row row-even">`;
    }

var startDate = rowObject.trng_cors_strt_dt;
startDate = startDate.substring(0, 10);

var endDate =rowObject.trng_cors_end_dt;
endDate = endDate.substring(0, 10);


      tableString +=`
      
      <div class="col-xs-3 col-sm-2 col-md-2"> <a href = "#"> <p> ${rowObject.trng_reqst_nbr} </p></a> </div>
  
   <div class= "col-xs-3 col-sm-3 col-md-3"><p>${rowObject.trng_cors_nm}</p></div>

   <div class="hidden-xs col-sm-3 col-md-3"> <p> ${startDate} </p> <p> ${endDate}</p> </div>
   
   
   
    <div class="col-xs-1 col-sm-1 col-md-1"><p>${rowObject.trng_reqst_immed_supv_apvl_flg} </p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p> ${ rowObject.trng_reqst_dept_hd_apvl_flg} </p></div>
  <div class="col-xs-1 col-sm-1 col-md-1"><p>${rowObject.trng_reqst_vp_apvl_flg}</p></div>
   
   <div class="col-xs-1 col-sm-1 col-md-1"><div class="checkbox text-center">
            <label>
            <input type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
            </label>
            </div> <p> ${rowObject.trng_cors_compl_flg} </p></div></div>  `

        
    });

    
     $('#etr2-data').html(tableString);
});
});


function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getetr2"){
    stubbedJson = [
{"id":1,
"trng_reqst_nbr":20140015,
"trng_cors_nm":"Visual Studio Live",
"trng_cors_strt_dt":"2014/05/05",
      "trng_cors_end_dt":"2014/05/08",
     "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"Y",
      "trng_reqst_vp_apvl_flg":"Y",
      "trng_cors_compl_flg":" "},
      
{"id":2,
"trng_reqst_nbr":20150044, 
"trng_cors_nm":"Visual Studio Live! 2015",
"trng_cors_strt_dt":"2015-09-28",
      "trng_cors_end_dt":"2015/10/01",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P", 
      "trng_cors_compl_flg":" "},
      
{"id":3, "trng_reqst_nbr":20150053, 
"trng_cors_nm":"Visual Studio Live", 
"trng_cors_strt_dt":"2015/09/28",
      "trng_cors_end_dt":"2015/10/01",
      "trng_reqst_immed_supv_apvl_flg":"Y",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_compl_flg":" "},
      
{"id":4, 
"trng_reqst_nbr":20160009,
"trng_cors_nm":"AppDynamics In Action for Power Users - .NET",
"trng_cors_strt_dt":"2016/04/16",
      "trng_cors_end_dt":"2016/04/22",
      "trng_reqst_immed_supv_apvl_flg":"P",
      "trng_reqst_dept_hd_apvl_flg":"P",
      "trng_reqst_vp_apvl_flg":"P",
      "trng_cors_compl_flg":" "}];
  }
  callback(stubbedJson);  
} 


