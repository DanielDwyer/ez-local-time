'use strict';
const timeZones = require('./timezones.js');
module.exports = (region = '') => {
    if (!region) region = Intl.DateTimeFormat().resolvedOptions().timeZone; // default to local
    if (typeof region !== 'string') return { error: 'Unexpected region type.', data: null };
    switch (region) {
        case 'hawaii':
            region = 'Hawaiian Standard Time';
            break;
        case 'alaska':
            region = 'Alaskan Standard Time';
            break;
        case 'pacific':
            region = 'America/Los_Angeles';
            break;
        case 'mountain7':
            region = 'America/Phoenix';
            break;
        case 'mountain6':
            region = 'America/Denver';
            break;
        case 'central':
            region = 'Central Standard Time';
            break;
        case 'eastern':
            region = 'Eastern Standard Time';
            break;
        default:
            region = region;
    }
    const r = region.toLocaleLowerCase();
    const [timeZone] = timeZones.filter((timeZone) => {
        if (r === timeZone.value.toLowerCase()) return timeZone;
        else if (r === timeZone.abbr.toLowerCase()) return timeZone;
        else if (timeZone.utc.includes(region)) return timeZone; // case sensitive
    });
    const dateObject = {};
    dateObject.utc = Date.now();
    const master = new Date();
    dateObject.timeZone = region;
    dateObject.dateTime = new Date(master.toLocaleString('en-US', { timeZone: timeZone.utc[0] }));
    dateObject.date = master.toLocaleString('en-US', { timeZone: timeZone.utc[0] }).split(',')[0];
    dateObject.time = master.toLocaleString('en-US', { timeZone: timeZone.utc[0] }).split(',')[1];
    var returnArray = master.toLocaleString('en-US', { timeZone: timeZone.utc[0] }).split(',');
    returnArray.push(returnArray[1].split(' ')[1])
    returnArray.push(returnArray[1].split(' ')[2])
    switch(returnArray[0][0]+returnArray[0][1]) {
        case '1/':
            dateObject.month = 'January';
            break;
        case '2/':
            dateObject.month = 'February';
            break;
        case '3/':
            dateObject.month = 'March';
            break;
        case '4/':
            dateObject.month = 'April';
            break;
        case '5/':
            dateObject.month = 'May';
            break;
        case '6/':
            dateObject.month = 'June';
            break;
        case '7/':
            dateObject.month = 'July';
            break;
        case '8/':
            dateObject.month = 'August';
            break;
        case '9/':
            dateObject.month = 'September';
            break;
        case '10':
            dateObject.month = 'October';
            break;
        case '11':
            dateObject.month = 'November';
            break;
        case '12':
            dateObject.month = 'Devember';
            break;
        default:
            dateObject.month = undefined;
    }
    switch (dateObject.dateTime.getDay()) {
        case 0:
            dateObject.day = 'Sunday';
            break;
        case 1:
            dateObject.day = 'Monday';
            break;
        case 2:
            dateObject.day = 'Tuesday';
            break;
        case 3:
            dateObject.day = 'Wednesday';
            break;
        case 4:
            dateObject.day = 'Thursday';
            break;
        case 5:
            dateObject.day = 'Friday';
            break;
        case 6:
            dateObject.day = 'Saturday';
            break;
        default:
            dateObject.day = undefined;
    }
    return dateObject;
}
