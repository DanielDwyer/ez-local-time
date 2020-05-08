var expect  = require('chai').expect
var ezlocalTime = require('../app.js')

it('no region should return localized object', function (done) {
    const result = ezlocalTime();
    expect(typeof result === "object").to.be.true;
    expect(result.utc).to.exist;
    expect(result.timeZone).to.exist;
    expect(result.dateTime).to.exist;
    expect(result.date).to.exist;
    expect(result.time).to.exist;
    expect(result.month).to.exist;
    expect(result.day).to.exist;
    done();
});

it("no region should return localized object", function (done) {
  const result = ezlocalTime('hawaii');
  expect(typeof result === "object").to.be.true;
  expect(result.timeZone === "Hawaiian Standard Time").to.be.true;
  expect(result.utc).to.exist;
  expect(result.timeZone).to.exist;
  expect(result.dateTime).to.exist;
  expect(result.date).to.exist;
  expect(result.time).to.exist;
  expect(result.month).to.exist;
  expect(result.day).to.exist;
  done();
});

it('correct month', function(done) {
    const result = ezlocalTime("America/Denver");
    expect(result.timeZone === "America/Denver").to.be.true;
    switch (result.date[0] + result.date[1]) {
      case "1/":
        expect(result.month === "January").to.be.true;
        done();
        break;
      case "2/":
        expect(result.month === "February").to.be.true;
        done();
        break;
      case "3/":
        expect(result.month === "March").to.be.true;
        done();
        break;
      case "4/":
        expect(result.month === "April").to.be.true;
        done();
        break;
      case "5/":
        expect(result.month === "May").to.be.true;
        done();
        break;
      case "6/":
        expect(result.month === "June").to.be.true;
        done();
        break;
      case "7/":
        expect(result.month === "July").to.be.true;
        done();
        break;
      case "8/":
        expect(result.month === "August").to.be.true;
        done();
        break;
      case "9/":
        expect(result.month === "September").to.be.true;
        done();
        break;
      case "10":
        expect(result.month === "October").to.be.true;
        done();
        break;
      case "11":
        expect(result.month === "November").to.be.true;
        done();
        break;
      case "12":
        expect(result.month === "Devember").to.be.true;
        done();
        break;
      default:
        expect(result.month === undefined).to.be.true;
    }
})
