'use strict'

var localTime = require('./app.js')

/*
** localTime([region], [response_format])
** region: Country/City_name, STRING
** response_format: d or date, t or time, STRING
*/

var regionDate = localTime('America/Los_Angeles', 'd')
//returns '1/24/2018'
console.log("regionDate:",regionDate);

var regionTime = localTime('America/Los_Angeles', 'time')
//returns '10:30:24 AM'
console.log("regionTime:",regionTime);

var all = localTime('America/Los_Angeles', '*')
//returns '1/24/2018, 10:31:12 AM'
console.log("all:",all);

var noResponse = localTime('America/Los_Angeles');
//returns 1/24/2018, 10:32:59 AM
console.log("noResponse:",noResponse);

var emptyResponse = localTime('America/Los_Angeles', '');
//returns 1/24/2018, 10:32:59 AM
console.log("emptyResponse:",emptyResponse);

var pacificResponse = localTime('west', '*');
//returns 1/24/2018, 10:32:59 AM
console.log("pacificResponse:",pacificResponse);

var mountainResponse = localTime('mountain', '*');
//returns 1/24/2018, 10:32:59 AM
console.log("mountainResponse:",mountainResponse);

var centralResponse = localTime('central', '*');
//returns 1/24/2018, 10:32:59 AM
console.log("centralResponse:",centralResponse);

var eastResponse = localTime('East', '*');
//returns 1/24/2018, 10:32:59 AM
console.log("eastResponse:",eastResponse);

var blankStrings = localTime('', '');
//returns 1/24/2018, 6:36:03 PM
console.log("blankStrings:",blankStrings);

var noRegionDate = localTime('', 'date');
//returns 1/24/2018
console.log("noRegionDate:",noRegionDate);

var noRegionTime = localTime('', 't');
//returns 6:38:58 PM
console.log("noRegionTime:",noRegionTime);
