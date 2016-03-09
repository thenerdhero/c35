'use strict'

$(document).ready(function(){

  $('#addTrainForm').submit(function(){

    $.post('/trains', {
      nameOfTrain: $('#nameOfTrain').val(),
      inService: $('#inService').is(':checked'),
      availableTrains: $('#availableTrains').val()
    });

    $('#addTrainForm')[0].reset();
    return false;
  });

});