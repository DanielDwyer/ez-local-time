'use strict'
module.exports = function(region, response){
  if(region === 'Pac' || region === 'pac' || region === 'Pacific' || region === 'pacific'){
    region = 'America/Los_Angeles'
  }else if(region === 'Mtn' || region === 'mtn' || region === 'Mountain' || region === 'mountain'){
    region = 'America/Denver'
  }else if(region === 'Cen' || region === 'cen' || region === 'Central' || region === 'central'){
    region = 'America/Chicago'
  }else if(region === 'Eas' || region === 'eas' || region === 'East' || region === 'east'){
    region = 'America/New_York'
  }
  if(region === ''){
    if(response === ''){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }else if(!response){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }else if(response === 'date' || response === 'd'){
      var d = new Date().toLocaleString('en-US', { timeZone: 'utc' })
      d= d.substring(0, d.indexOf(','))
      return d;
    }else if(response === 'time' || response === 't'){
      var t = new Date().toLocaleString('en-US', { timeZone: 'utc' })
      t= t.substring(t.indexOf(',')+2, t.length)
      return t;
    }else if(response === '*'){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }
  }else if(!region){
    if(response === ''){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }else if(!response){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }else if(response === 'date' || response === 'd'){
      var d = new Date().toLocaleString('en-US', { timeZone: 'utc' })
      d= d.substring(0, d.indexOf(','))
      return d;
    }else if(response === 'time' || response === 't'){
      var t = new Date().toLocaleString('en-US', { timeZone: 'utc' })
      t= t.substring(t.indexOf(',')+2, t.length)
      return t;
    }else if(response === '*'){
      return new Date().toLocaleString('en-US', { timeZone: 'utc' })
    }
  }else{
    if(response === ''){
      //date and time
        return new Date().toLocaleString('en-US', { timeZone: region })
    }else if(!response){
      //date and time
        return new Date().toLocaleString('en-US', { timeZone: region })
    }else if(response === 'date' || response === 'd'){
      //region specified & date only
        var d = new Date().toLocaleString('en-US', { timeZone: region })
        d= d.substring(0, d.indexOf(','))
        return d;
    }else if(response === 'time' || response === 't'){
      //time only
        var t = new Date().toLocaleString('en-US', { timeZone: region })
        t= t.substring(t.indexOf(',')+2, t.length)
        return t;
    }else if(response === '*'){
      //date and time
        return new Date().toLocaleString('en-US', { timeZone: region })
    }
  }
}
