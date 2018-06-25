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

    it('subtracts two numbers', () => {
        const diff = subtract(10, 5);
        assert.equal(diff, 5);
    });

    it('multiplies two numbers', () => {
        const multiply = multiply(3, 4);
        assert.equal(multiply, 12);
    });

    it('divides two numbers', () => {
        const quotient = divide(4, 2);
        assert.equal(quotient, 2);
    });
});