const assert = require('assert');
const calc = require('../lib/calculator');
const { add, subtract, multiply, divide } = calc;


describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const diff = subtract(10, 5);
        assert.equal(diff, 5);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(4, 2);
        assert.equal(quotient, 2);
    });

    it('throws error when dividing by zero', () => {

    });
});