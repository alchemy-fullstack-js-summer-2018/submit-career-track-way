const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {
    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtract two numbers', () => {
        const result = subtract(3, 2);
        assert.equal(result, 1);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 3);
        assert.equal(product, 9);
    });

    it('divides two numbers', () => {
        const quotient = divide(4, 2);
        assert.equal(quotient, 2);
    })
});
