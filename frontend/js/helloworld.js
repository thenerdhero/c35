$(document).ready(function(){

  $('#submitButton').click(function(){
    $.post('/addValue',{ "value" :  $('#inputValue').val() });
  })

  $.get('/resultsInDatabase', function(results){
    var tableString = "<tr><th>Values in Database</th></tr>"
    $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.val + "</td></tr>"
    })
    $('#resultsInDatabase').html(tableString);
  })
});

