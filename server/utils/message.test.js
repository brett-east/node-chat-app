var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'Brett';
    var text = 'This is a message';
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });

});
