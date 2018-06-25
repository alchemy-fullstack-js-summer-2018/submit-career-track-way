const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;


describe('calculator', () => {

  it('add two numbers', () => {
    const sum = add(3, 4);
    assert.equal(sum, 7);
  });
  
})