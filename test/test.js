var expect  = require('chai').expect
var ezlocalTime = require('../app.js')

console.log("ezlocalTime('west'):",ezlocalTime('west'));
expect(ezlocalTime('west').length).to.equal(7);
expect(ezlocalTime('east')).to.be.a('Array');
expect(ezlocalTime('mountain')).to.be.a('Array');
expect(ezlocalTime('central')).to.be.a('Array');
