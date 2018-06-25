const assert = require('assert');
const calc = require('../lib/calculator');
const add = calc.add;
const subtract = calc.subtract;
const multiply = calc.multiply;
const divide = calc.divide;

describe ('calculator', () => {
    it('adds two numbers', () => {
        const sum = add(3, 4);
        assert.equal(sum, 7);
    });
    it('subtracts second number from first', () => {
        const difference = subtract(5, 4);
        assert.equal(difference, 1);
    });
    it('multiplies first number by second', () => {
        const product = multiply(5, 4);
        assert.equal(product, 20);
    });
    it('divides first number by second', () => {
        const quotient = divide(6, 2);
        assert.equal(quotient, 3);
    });
});