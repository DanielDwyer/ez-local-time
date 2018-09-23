'use strict'
module.exports = function(region){

  region = region.toLowerCase()//standardize
  let zone = ''//placeholder
  zone = region//start by assigning input region in lc format

  try{
    if(region === 'west' || region === 'w') {zone = 'America/Los_Angeles'}
    if(region === 'mountain' || region === 'm'){zone = 'America/Denver'}
    if(region === 'central' || region === 'c'){zone = 'America/Chicago'}
    if(region === 'east' || region === 'e'){zone = 'America/New_York'}
    if(region === '' || region === ' '){zone = Intl.DateTimeFormat().resolvedOptions().timeZone}//local to user or server? not sure
    try{
      var today = new Date(new Date().toLocaleString('en-US', { timeZone: zone }))
      var returnArray = new Date().toLocaleString('en-US', { timeZone: zone }).split(',')
      returnArray.push(returnArray[1].split(' ')[1])
      returnArray.push(returnArray[1].split(' ')[2])
      switch(returnArray[0][0]+returnArray[0][1]) {
          case '1/':
              returnArray.unshift('January')
              break;
          case '2/':
              returnArray.unshift('February')
              break;
          case '3/':
              returnArray.unshift('March')
              break;
          case '4/':
              returnArray.unshift('April')
              break;
          case '5/':
              returnArray.unshift('May')
              break;
          case '6/':
              returnArray.unshift('June')
              break;
          case '7/':
              returnArray.unshift('July')
              break;
          case '8/':
              returnArray.unshift('August')
              break;
          case '9/':
              returnArray.unshift('September')
              break;
          case '10':
              returnArray.unshift('October')
              break;
          case '11':
              returnArray.unshift('November')
              break;
          case '12':
              returnArray.unshift('Devember')
              break;
          default:
              //opps
              returnArray.push('Who Knows What Month It Is, We Do Not!')
              return returnArray
      }
      try{
        returnArray[2] = Date.now()
        returnArray.push(zone)
        switch(today.getDay()) {
            case 0:
                //sunday
                returnArray.push('Sunday')
                return returnArray
                break;
            case 1:
                //monday
                returnArray.push('Monday')
                return returnArray
                break;
            case 2:
                //tuesday
                returnArray.push('Tuesday')
                return returnArray
                break;
            case 3:
                //wednesday
                returnArray.push('Wednesday')
                return returnArray
                break;
            case 4:
                //thursday
                returnArray.push('Thursday')
                return returnArray
                break;
            case 5:
                //friday
                returnArray.push('Friday')
                return returnArray
                break;
            case 6:
                //saturday
                returnArray.push('Saturday')
                return returnArray
                break;
            default:
                //opps
                returnArray.push('Who Knows What Day It Is, We Do Not!')
                return returnArray
        }
      }catch(e){
        return console.log("Check Your Region - Not Recgnozied. Remember, case is unimportant.",e);
      }
    }catch(e){
      return console.log("Cannot Assign Date and/or Month",e)
    }
  }catch(e){
    return console.log("Our Error. Sorry. Please log issue on GitHub.",e)
  }


}
