const assert = require('assert');
const calc = require('../lib/calculator');
const { add, subtract, multiply, divide } = calc;

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const difference = subtract(4, 3);
        assert.equal(difference, 1);
    });

    it('multiplies two numbers', () => {
        const mult = multiply(4, 3);
        assert.equal(mult, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(4, 2);
        assert.equal(quotient, 2);
    });
});


