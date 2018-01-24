'use strict'

var localTime = require('./app.js')

var time = localTime('t', 'America/Denver');
var date = localTime('d', 'America/Denver');
var timeAndDate = localTime('America/Denver');
console.log("time:",time);
console.log("date:",date);
console.log("timeAndDate:",timeAndDate);
