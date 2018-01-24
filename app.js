'use strict'

module.exports = function(dt, r){

  if(r === ''){
    //no region specified, base off of runtime environment
    if(dt === 'd'){
      //date only
      var d = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
      d= d.substring(0, d.indexOf(','))
      return d;
    }else if(dt === 't'){
      //time only
    }else{
      //date and time
    }
  }else{
    //region is specified
    if(dt === 'd'){
      //date only
      var d = new Date().toLocaleString('en-US', { timeZone: r })
      d= d.substring(0, d.indexOf(','))
      return d;
    }else if(dt === 't'){
      //time only
      var t = new Date().toLocaleString('en-US', { timeZone: r })
      t= t.substring(t.indexOf(',')+2, t.length)
      return t;
    }else{
      //date and time
      return new Date().toLocaleString('en-US', { timeZone: r })
    }
  }

}
