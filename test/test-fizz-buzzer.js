const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {


// testing the normal case
it('should return fizz-buzz, buzz or fizz if divisible by 15, 5 or 3 respectively or input if not divisible by any', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 0, expected: 'fizz-buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: -15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 20, expected: 'buzz'},
      {num: -5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 9, expected: 'fizz'},
      {num: -3, expected: 'fizz'},
      {num: 2, expected: 2}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
});

it('should raise error if arg not number', function() {
  // range of bad inputs where not both are numbers
  const badInputs = ['a','1',false];

  badInputs.forEach(function(input) {
    (function() {
        fizzBuzzer(input.num)
    }).should.throw(Error);
  });
});

});
