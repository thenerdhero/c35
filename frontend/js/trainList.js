$(document).ready(function(){

  $.get('/trains', function(results){
    var tableString = "<tr><th>Train Name</th><th>In Service</th><th>Number of Available Cars</th></tr>"
    $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.name + "</td>" +
        "<td>" + rowObject.inservice + "</td>" +
        "<td>" + rowObject.numberofavailable + "</td></tr>"
    });
    $('#trainTable').html(tableString);
  });

});

