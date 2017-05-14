var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'Brett';
    var text = 'This is a message';
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });

});

describe('generateLocationMessage', () => {
  it('should generate correct location', () => {
    var from = 'Admin';
    var lat = 5;
    var long = 5
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var res = generateLocationMessage(from, lat, long);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});
