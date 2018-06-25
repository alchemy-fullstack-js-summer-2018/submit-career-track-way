const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;

describe('calculator', () => {

    it('add two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtract two numbers',() => {
        const diff = subtract(4, 3);
        assert.equal(diff, 1);
    });  
});