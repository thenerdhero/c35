'use strict';


var router = require('express').Router();
var database = require('./database.js');
var _ = require('lodash');
var fs = require('fs');

module.exports = function(){

  _.each(fs.readdirSync('./routers'), function(fileName){
    var routerFromFile = require("../routers/" + fileName);
    router.stack = _.concat(router.stack, routerFromFile.stack);
  });

  return router;
}();