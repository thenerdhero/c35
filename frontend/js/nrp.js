'use strict'

$(document).ready(function(){
$('#datetimepicker1').datetimepicker();//for our calendars
$('#datetimepicker2').datetimepicker();

              $("[name=toggler]").click(function(){//for radio buttons
              $('.toHide').hide();
            
              $("#blk-"+$(this).val()).show('slow');
               });


  
               $('#test').submit(function(){

   $.post('/addRequest', {
     //trng_reqst_nbr: $('#crsId').val(),
     selectCrsName: $('#selectCrsName')
   });
     //trng_cors_strt_dt: $('#startDateReq').val(),
     //trng_cors_end_dt: $('#endDateReq').val(),
     //trng_reqst_immed_supv_apvl_flg: $('#startDateReq').val(),
       console.log($('#selectCrsName').val());
   

    return false;
             });

}); 


 
 
