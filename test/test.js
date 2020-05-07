var expect  = require('chai').expect
var ezlocalTime = require('../app.js')

it.only('...', function (done) {
    let timeResponse = ezlocalTime('Argentina Standard Time');
    expect(typeof timeResponse === 'object').to.be.true;
    expect(timeResponse.timeZone === 'America/Argentina/La_Rioja').to.be.true;
    done();
})

it('no input returns localized', function(done) {
    let timeResponse = ezlocalTime()
    expect(typeof timeResponse === 'object' && timeResponse.length === 7).to.be.true
    done()
})

it('returning an array, length of 7', function(done) {
    let timeResponse = ezlocalTime('west')
    expect(typeof timeResponse === 'object' && timeResponse.length === 7).to.be.true
    expect(timeResponse[5] === 'America/Los_Angeles').to.be.true
    done()
})

it('correct month', function(done) {
    let timeResponse = ezlocalTime('mountain')
    expect(timeResponse[5] === 'America/Denver').to.be.true
    switch(timeResponse[1][0]+timeResponse[1][1]) {
        case '1/':
            expect(timeResponse[0] === 'January').to.be.true
            done()
            break;
        case '2/':
            expect(timeResponse[0] === 'February').to.be.true
            done()
            break;
        case '3/':
            expect(timeResponse[0] === 'March').to.be.true
            done()
            break;
        case '4/':
            expect(timeResponse[0] === 'April').to.be.true
            done()
            break;
        case '5/':
            expect(timeResponse[0] === 'May').to.be.true
            done()
            break;
        case '6/':
            expect(timeResponse[0] === 'June').to.be.true
            done()
            break;
        case '7/':
            expect(timeResponse[0] === 'July').to.be.true
            done()
            break;
        case '8/':
            expect(timeResponse[0] === 'August').to.be.true
            done()
            break;
        case '9/':
            expect(timeResponse[0] === 'September').to.be.true
            done()
            break;
        case '10':
            expect(timeResponse[0] === 'October').to.be.true
            done()
            break;
        case '11':
            expect(timeResponse[0] === 'November').to.be.true
            done()
            break;
        case '12':
            expect(timeResponse[0] === 'Devember').to.be.true
            done()
            break;
        default:
            //opps
            expect(timeResponse[0] === 'A Month').to.be.true
            return timeResponse
    }
})
