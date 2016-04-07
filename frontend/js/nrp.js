'use strict'

$(document).ready(function(){
$('#datetimepicker1').datetimepicker();//for our calendars
$('#datetimepicker2').datetimepicker();

              $("[name=toggler]").click(function(){//for radio buttons
              $('.toHide').hide();
               $('.toHide').toggleClass("hidden");
            
              $("#blk-"+$(this).val()).show('slow');
               });

console.log("binding formsubmit");
  
               $("#Try").submit(function(){
                
                   console.log("form submited");
       console.log($('#Trng_Cors_Nm').val());
        console.log($('#Trng_Cors_Strt_Dt').val());
        console.log($('#Trng_Cors_End_Dt').val());
                   

  $.post('/addRequest', {
     Trng_Cors_Nm: $('#Trng_Cors_Nm').val(),
     Trng_Cors_Id: $('#Trng_Cors_Id').val(),
     Trng_Cors_Strt_Dt: $('#Trng_Cors_Strt_Dt').val(),
     Trng_Cors_End_Dt: $('#Trng_Cors_End_Dt').val(),
     Trng_Cors_Totl_Nbr_Hrs: $('#Trng_Cors_Totl_Nbr_Hrs').val(),
     Trng_Cors_Cost: $('#Trng_Cors_Cost').val(),
     Trng_Cors_Locn: $('#Trng_Cors_Locn').val(),
     Trng_Cors_Rltd_Exp_Amt: $('#Trng_Cors_Rltd_Exp_Amt').val(),
     Trng_Reqst_Cors_Bnft_Txt: $('#Trng_Reqst_Cors_Bnft_Txt').val(),
     Vndr_Nm: $('#Vndr_Nm').val(),
     
  }, function(){
      console.log("returned");
     
         myFunction();
     
      
  });
     

    return false;
             });


}); 

function myFunction() {
    var x;
    if (confirm("Thank you for submitting your training request application.\nYou will recieve a confirmation email when application is approved or denied") == true) {
        x = "You submitted your form";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("btn send").innerHTML = x;
}

 
