const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe('calculator', () => {
    it('add two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);

    });

    it('subtracts two numbers', () => {
        const difference = subtract(16, 8);
        assert.equal(difference, 8);
    });

    it('multiplies two numbers', () => {
        const product = multiply(3, 4);
        assert.equal(product, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(12, 4);
        assert.equal(quotient, 3);
    });


});