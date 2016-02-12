$(document).ready(function(){

$('#submitButton').click(function(){
  console.log($('#inputValue').val());
  $.ajax({
        url: "/tableOfResults",
        type: "POST",
        dataType: "json",
        data: { "value" :  $('#inputValue').val()},
  });
})

});

