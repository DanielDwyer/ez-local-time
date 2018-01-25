# ez-local-time

**Note: In Development! Expect Changes before March 1, 2018.**
**The 1st Stable Version (for production use) will be 1.0.0..**
**I was shocked to see 96 downloads on day # 1. I will do my best to get this up and running.**

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

Require the Module:
```shell
const localTime = require('ez-local-time')
```

Now Put it To Work - It's Always On Time!

Get Localized Time:
```shell
const DenverTime = localTime('Mountain', 't')
```
Get Localized Date:
```shell
const HollywoodDate = localTime('pacific', 'd')
```
Get Localized Time & Date:
```shell
const BigAppleTimeAndDate = localTime('east', '*')
```

## Parameters
#### const varName = localTime([region], [response])
##### [region] : 'Pacific' || 'Pac' || 'Mountain' || 'Mtn' || 'Central' || 'Cen' || 'East' || 'Eas' <> STRING
NOTE: If you want to work outside the US (or in Alaska or Hawaii) just use the convention 'Country_Name/City_Name' i.e. 'America/Anchorage' or 'Czech_Republic/Prague' as your region input. It has worldwide functionality  and defaults to UTC time or GMT.
##### [response] : 'time' || 't' || 'date' || 'd' || '*' <> STRING


## Example
Note: If you are using ES6, i.e. React, (import and not require) you must compile your application code before interacting with the ez-local-time module.



```js
'use strict'

const localTime = require('ez-local-time')

const DenverDate = localTime('Mtn', 'd')
//returns '1/24/2018'
const DenverTime = localTime('mountain', 'time')
//returns '10:30:24 AM'
const DenverDateAndTime = localTime('America/Denver', '*')
//returns '1/24/2018, 10:32:59 AM'

```


## In The Pipeline
I am developing version 1.0.0 as a proof of concept. Many features have been placed in the ice box (for now). I am placing a developmental priority on compatibility with ES6, allowing the React.js community access to a basic local time library, aside from Moment.js. Expect those updates in version 1.0.0 (the first stable production ready launch) by March 1, 2018. This is a community project, pull requests are welcome. Let's see where we can take this!

## License

MIT
