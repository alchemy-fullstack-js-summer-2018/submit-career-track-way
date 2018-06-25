const calc = require('../lib/calculator');
const assert = require('assert');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {

    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });

    it('subtracts two numbers', () => {
        const diff = subtract(6, 2);
        assert.equal(diff, 4);
    });

    it('multiplies two numbers', () => {
        const product = multiply(4, 5);
        assert.equal(product, 20);
    });

    it('divides two numbers', () => {
        const quotient = divide(12, 6);
        assert.equal(quotient, 2);
    });
});