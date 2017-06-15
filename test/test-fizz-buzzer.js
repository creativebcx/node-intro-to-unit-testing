const should = require('chai').should();

const divider = require('../fizzBuzzer');

describe('divider', function() {

  it('should be divisable by 15, 5, or 3', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'}
    ];
    // for each set of inputs the function should
    // produce the expected value
    normalCases.forEach(function(item) {
      const answer = divider(item.num);
      answer.should.equal(item.expected);
    });
  });
  it('should raise error if argument is not a number', function() {
    //range of inputs that are not numbers
    const badInputs = ['a', '1', false];
  
    badInputs.forEach(function (item) {
      (function() {
            divider(item);
      }).should.throw(Error);
    });
  });
});