
# ez-local-time

![Downloads](https://img.shields.io/npm/dw/ez-local-time.svg)
![Downloads](https://img.shields.io/npm/dm/ez-local-time.svg)
![Downloads](https://img.shields.io/npm/dt/ez-local-time.svg)
![npm version](https://img.shields.io/npm/v/ez-local-time.svg)
![License](https://img.shields.io/npm/l/ez-local-time.svg)

This cut and dry <i>speed demon</i> of a **Node.js** module delivers your desired localized date and time. This codebase depends solely on the Javascript API. There are absolutely no dependent packages to keep up to date, just install and import/require ez-local-time and never deal with ```new Date``` or ```Date.now()``` again when trying to deal with local time or time zones. You provide the region and desired response format (time, date, or both) and get the local date/time.

The **region** parameter follows a logical protocol: County/City, i.e. America/New_York .
Note: If a country or city is more than a single word, all words are capitalized and are separated by an underscore (as you can see above).
**For further reference on time zones and regions please refer to:**
<i>Internet Assigned Numbers Authority:</i> https://www.iana.org/time-zones
<i>Time Difference (to explore locations):</i> https://www.zeitverschiebung.net/en/country/us


- Live Example: COMING SOON http://google.com/
- Github: https://github.com/DanielDwyerPersonal/Local-Time

## Getting Started

Install it via npm:

```shell
npm i ez-local-time
```


## Example
Note: If you are using ES6, think React, (import and not require) you must compile your application code before interacting with the ez-local-time module.

```js
'use strict'

const localTime = require('ez-local-time')

/*
**
How To Use
**
const varName = localTime([region], [response])
**
Pacific => [region] : America/Los_Angeles
Mountain => [region] : America/Denver
Central => [region] : America/Chicago
East => [region] : America/New_York
**
Default => [region]: if the parameter is left blank or the parameter passed is a blank string defaults to UTC time
**
t => [response] : time only
time => [response] : time only
d => [response] : date only
date => [response] : date only
* => [response] : time and date
*/

const DenverDate = localTime('America/Denver', 'd')
//returns '1/24/2018'
const DenverTime = localTime('America/Denver', 'time')
//returns '10:30:24 AM'
const DenverDateAndTime = localTime('America/Denver', '*')
//returns '1/24/2018, 10:32:59 AM'

```

## In The Pipeline
I am developing version 1.0.0 as a proof of concept. Many features have been placed in the ice box (for now). I am placing a developmental priority on compatibility with ES6, allowing the React.js community access to a basic local time library, aside from Moment.js. Additionally, am emphasis is placed on establishing defaults for the region parameter to reflect America's main four time zones. Expect those updates in version 2.0.0 by March 1, 2018. This is a community project, pull requests are welcome. Let's see where we can take this!

## License

MIT
