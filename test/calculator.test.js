const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;

describe('calculator', () => {
    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7); 
    }); 
    it('subtracts two numbers', () => {
        const total = subtract(3, 4);
        assert.equal(total, 1);
    })
});