var router = require('express').Router();
var database = require('../c35_modules/database');

module.exports = function() {

  router.get('/helloworld', function (req, res) {
    return res.render('helloworld.html');
  });

  router.post('/trains', function(req,res){
    var query = "INSERT INTO trains (name,inService,numberOfAvailable) VALUES ('" + req.body.nameOfTrain +
        "'," + req.body.inService  +
        "," + req.body.availableTrains + ")";

    database.executeQuery(query);
    return res.send("success");
  });

  return router
}();