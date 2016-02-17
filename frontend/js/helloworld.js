$(document).ready(function(){

  $('#submitButton').click(function(){
    $.post('/addValue',{ "value" :  $('#inputValue').val() });
  })

});

