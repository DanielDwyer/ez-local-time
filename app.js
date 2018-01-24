'use strict'

module.exports = function(dt, r){
  if(dt === 'd'){
    var d = new Date().toLocaleString('en-US', { timeZone: r })
    d= d.substring(0, d.indexOf(','))
    return d;
  }else if(dt === 't'){
    var t = new Date().toLocaleString('en-US', { timeZone: r })
    t= t.substring(t.indexOf(',')+2, t.length)
    return t;
  }else{
    return new Date().toLocaleString('en-US', { timeZone: r })
  }
}
