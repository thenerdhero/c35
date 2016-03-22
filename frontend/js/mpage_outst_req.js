$(document).ready(function(){
    var tableString = `
<div class="col-xs-4 col-sm-4 col-md-4"><p>Request #<br>Employee Name</p></div>
<div class= "col-xs-4 col-sm-4 col-md-4"><p>Start/End Date</p></div> <div class="col-xs-2 col-sm-2 col-md-2"><p>SV<br>Appv</p></div>
<div class="col-xs-2 col-sm-2 col-md-2"><p>DH<br>Appv</p></div>
  `;
     $('#outst_req').html(tableString);
    
});