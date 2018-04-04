'use strict'

const localTime = require('./app.js')

//DEAL WITH TIME ZONE DATA OBJECT
// const tzArr = require('./tzDataObj')
// for(var i = 0; i < tzArr.zoneData.length; i++){
//   // console.log(tzArr.zoneData[i].utc);
//   for(var ii = 0; ii < tzArr.zoneData[i].utc.length; ii++){
//     if(tzArr.zoneData[i].utc[ii].indexOf('Etc') === -1 && tzArr.zoneData[i].utc[ii].indexOf('PST8PDT') === -1 && tzArr.zoneData[i].utc[ii].indexOf('MST7MDT') === -1 && tzArr.zoneData[i].utc[ii].indexOf('CST6CDT') === -1 && tzArr.zoneData[i].utc[ii].indexOf('EST5EDT') === -1){
//       console.log(tzArr.zoneData[i].utc[ii]);
//     }
//   }
// }

console.log(localTime('Mountain', '*'));
console.log(localTime('America/Denver', '*'));
console.log(localTime('east', ''));
console.log(localTime('Mountain', 't'));
console.log(localTime('America/Denver', 't'));
console.log(localTime('mtn', 't'));
console.log(localTime('Mountain', 'd'));
console.log(localTime('America/Denver', 'd'));
console.log(localTime('mtn', 'D'));

//TESTS
// var regionDate = localTime('America/Los_Angeles', 'd')
// //returns '1/24/2018'
// console.log("regionDate:",regionDate);
//
// var regionTime = localTime('America/Los_Angeles', 'time')
// //returns '10:30:24 AM'
// console.log("regionTime:",regionTime);
//
// var all = localTime('America/Los_Angeles', '*')
// //returns '1/24/2018, 10:31:12 AM'
// console.log("all:",all);
//
// var noResponse = localTime('America/Los_Angeles');
// //returns 1/24/2018, 10:32:59 AM
// console.log("noResponse:",noResponse);
//
// var emptyResponse = localTime('America/Los_Angeles', '');
// //returns 1/24/2018, 10:32:59 AM
// console.log("emptyResponse:",emptyResponse);
//
// var blankStrings = localTime('', '');
// //returns 1/24/2018, 6:36:03 PM
// console.log("blankStrings:",blankStrings);
//
// var noRegionDate = localTime('', 'date');
// //returns 1/24/2018
// console.log("noRegionDate:",noRegionDate);
//
// var noRegionTime = localTime('', 't');
// //returns 6:38:58 PM
// console.log("noRegionTime:",noRegionTime);
